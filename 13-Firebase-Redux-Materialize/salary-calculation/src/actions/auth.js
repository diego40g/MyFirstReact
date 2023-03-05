import { types } from '../types/types'
import { signInWithPopup, googleAuhtProvider, auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '../firebase/config-firebase'

export const googleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = googleAuhtProvider.credentialFromResult(result)
            const token  = credential.accessToken
            const user = result.user;
            dispatch(login(user.uid, user.displayName))
        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.customData.email
            const credential = googleAuhtProvider.credentialFromError(error)
        })
    }
}

export const emailAndPasswordLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        dispatch(login(user.uid, user.displayName))
    }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
}

export const register = (email,password,username) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            updateProfile(auth.currentUser,{
                displayName: username
            }).then(()=>{
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch((error) => {
                console.log("error actualizar");
            })
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })
    }
}

export const login = (uid, displayname) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayname,
        }
    }
}