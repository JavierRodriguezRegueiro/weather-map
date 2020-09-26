/// <reference types="cypress" />


context('Window', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    it('should appear weather modal info', () => {
        cy.get('input').type('barcelona{enter}');
        cy.get('button').contains('Hourly').click();
        cy.get('.hourlyDataModal-modal').within(modal => {
            cy.get('.modal-close').click()
        })
    })

    it('should appear error modal on wrong input value', () => {
        cy.get('input').as('CityInput')
        cy.get('@CityInput').type('dnjsnadka{enter}');
        cy.get('.modal').within(modal => {
            cy.get('h3').contains('Oh, there was an error during the request');
            cy.get('.modal-close').click()
        });
        cy.get('.cityInput-removeContentButton').click()
        cy.get('@CityInput').type('Madrid{enter}');
        cy.get('button').contains('Hourly')
    })
})
