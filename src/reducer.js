// redux reducer
// interprits what to do with actions
function counter(state, action){
    if (state == null) {
        return { count: 0};
    }

    var count = state.count;

    switch(action.type) {
        case "increase":
            return {count: ++count};
        case "decrease":
            return {count: --count};
        default:
            return state;
    }
}

export default counter;