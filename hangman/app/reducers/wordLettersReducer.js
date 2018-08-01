/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';



const wordCreator = (str) => {
    const letters = str.split('');
    const word = letters.map(letter => {
        return{
            letter: letter,
            guessed: false
        };
    });
    return word;
};
const word = wordCreator('encyclopedia');
const wordLettersReducer = (state = word, action) => {
    let newState;
    switch (action.type) {
        case 'GOOD_GUESS':
            newState = [...state];
            newState.forEach(obj => {
                if (obj.letter.toLowerCase() === action.letter.toLowerCase()) {
                    obj.guessed = true;
                }
            });

            return newState;
        default:
            return state;
    }
};
export default wordLettersReducer;
