export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1
        case 'REDUCE':
            return state - 1
        case "INIT":
            return state = 0
        default:
            return state
    }
}