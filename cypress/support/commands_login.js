
Cypress.Commands.add('iniciarLogin', (usuario) => {
    cy.visit("/index.php")

    cy.get('header nav a[href ^="login"]')
        .click()

    //checkpoint
    cy.get("div h2")
        .should("be.visible")
        .and("have.text", "Login de Prestador de Serviço")

    cy.get('input[id="email_login"]').as('email')
    cy.get('input[id="senha_login"]').as('senha')

    if(usuario?.email) {
        cy.get('@email').type(usuario.email)
    }

    if(usuario?.senha) {
        cy.get('@senha').type(usuario.senha)
    }

    cy.contains('button[type="submit"]', 'Entrar')
        .click()
})

Cypress.Commands.add('verificarLogin', (primeiroNome, email) => {
    // cy.get('.user-email') //elemento por classe
    //     .should('be.visible')
    //     .and('have.text', 'Olá, ' + primeiroNome)

    // cy.get('.user-email') //elemento por classe
    //     .should('be.visible')
    //     .and('have.text', 'Olá, ' + email)

    cy.contains('Login bem-sucedido!')
        .should('be.visible')
})

Cypress.Commands.add('verificarAlerta', (campo, texto) => {
    cy.contains('label', campo)
        .parent()
        .find('.erro-msg')
        .should('be.visible')
        .and('have.text', texto)
})
