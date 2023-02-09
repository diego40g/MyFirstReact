const CalcularReducer = (state, action) => {
    state = {
        n1: 5, 
        n2: 7
    }
    switch (action.type) {
        case "sumar":
            return state.n1 + state.n2
        case "restar":
            return state.n1 - state.n2    
        default:
            return 0
    }
}