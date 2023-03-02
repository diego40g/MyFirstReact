import { types } from '../types/types'
import { signInWithPopup, googleAuhtProvider, auth, provider } from '../firebase/config-firebase'

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

export const login = (uid, displayname) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayname,
        }
    }
}