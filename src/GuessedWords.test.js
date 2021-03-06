import React from 'react'
import {shallow, configure} from 'enzyme'
import {findByTestAttr, checkProps} from './../test/testUtils'
import GuessedWords from './GuessedWords'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})


const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
}

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({guessedWords: []})
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-word')
        expect(component.length).toBe(1)
    })
    
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', () => {
    test('renders instructions to guess a word', () => {
        
    })
})