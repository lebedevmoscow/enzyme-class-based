import React from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr, storeFactory} from './../test/testUtils'
import Input from './Input'

/**
 * Factory function to create s ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive()
    return wrapper
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper
        beforeEach(() => {
            // TODO: FIX THE BUG
            // const initialState = {success: false}
            const initialState = {}
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })

        // test('renders input box', () => {
        //     const inputBox = findByTestAttr(wrapper, 'input-box')
        //     expect(inputBox.length).toBe(1)
        // })
        
        // test('renders submit button', () => {
        //     const submitBox = findByTestAttr(wrapper, 'submit-box')
        //     expect(submitBox.length).toBe(1)
        // })
    })

    describe('word has been guessed', () => {
        test('renders component without error', () => {
            
        })

        test('does not renders input box', () => {
            
        })
        
        test('does not renders submit button', () => {
            
        })
    })
})

describe('update state', () => {

})