/// <reference types="cypress" />

describe ('Sample Page Tests', () => {
        beforeEach(() => {
            cy.visit('https://www.globalsqa.com/samplepagetest')
        })

        describe('Form Test', () => {
            it('should return validation errors for blank or invalid inputs on required fields', () => {
                cy.get('.pushbutton-wide').click()
                cy.get('#contact-form-2599 > form').within(() => {
                    cy.get('.pushbutton-wide').click()
                    cy.get('#g2599-name').invoke('prop', 'validationMessage')
                    .should('equal', 'Please fill in this field.')
                    cy.get('#g2599-name').type('valid')
                    cy.get('#g2599-email').type('invalid')
                    cy.get('#g2599-email').invoke('prop', 'validationMessage')
                    .should('equal', 
                    "Please include an '@' in the email address. 'invalid' is missing an '@'.")
            })
        })
    })
    })