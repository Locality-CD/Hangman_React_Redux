import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
    letterObj => letterObj.letter.toLowerCase() === letter.toLowerCase());
    const loser = () => wordLetters.some(
    letterObj => !letterObj.guessed);

    const show = true
    let word;
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>

            <input type="text"
                value={''}
                ref={node => {word = node;}}
            />
            <button > X </button>

          {guessedLetters}
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    letterInAnswer(input.value) ? onGoodGuess(input.value) :  onBadGuess(input.value);
                } }
            />
            {!loser() ? <p> YOU HAVE WON! GOOD JOB! </p> : null}
            </div>  );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func
};

const mapStateToProps = ( state ) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter)=>dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter)=>dispatch({type: 'GOOD_GUESS', letter: inputLetter}),

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
