/// <reference types="cypress"/>

describe('Testes para exercicio', ()=> {

    beforeEach(()=> {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', ()=> {
        cy.get('.contato').should('have.length', 3)
    })

    it('deve adicionar um novo contato', ()=> {
        cy.get('[type="text"]').type('John')
        cy.get('[type="email"]').type('contato21john@gmail.com')
        cy.get('[type="tel"]').type('11999999999{enter}')

        cy.get('.contato').should('have.length', 4)
    })

    it('deve editar e salvar', ()=> {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Lucas')
        cy.get('[type="email"]').clear().type('Lucas@gmail.com')
        cy.get('[type="tel"]').clear().type('11999889999{enter}')
        cy.get('.alterar').click()

        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Lucas')

    })

    it('deve remover um contato', ()=>{
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        
        cy.get('.contato').should('have.length', 3)
    })

})