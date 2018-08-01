

const guessedLettersReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case 'BAD_GUESS':
            newState = [...state];
            newState.push(action.letter);
            return newState;
        case 'GOOD_GUESS':
            newState = [...state];
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};
export default guessedLettersReducer;
