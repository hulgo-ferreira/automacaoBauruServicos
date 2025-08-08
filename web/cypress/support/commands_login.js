
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

Cypress.Commands.add('verificarLogin', (primeiroNome) => {
    cy.get('.user-name') //elemento por classe
         .should('be.visible')
         .and('contain', 'Olá, ' + primeiroNome)

    cy.contains('Login bem-sucedido!')
        .should('be.visible')
})

// Cypress.Commands.add('verificarAlerta', (mensagem) => {
//     cy.contains('.erro-msg')
//         .should('be.visible')
//         .and('have.text', mensagem)
// })

Cypress.Commands.add('verificarAlerta', (campo, texto) => {
    cy.contains('label', campo)
        .parent()
        .find('.erro-msg')
        .should('be.visible')
        .and('have.text', texto)
})

Cypress.Commands.add('realizarLogout', () => {
    // Passa o mouse sobre o elemento que abre o dropdown
    cy.contains('Olá, HGTeste').trigger('mouseover')
    cy.get('.dropdown-content')
        .invoke('css', 'display', 'block')
        .should('be.visible')
    cy.get('a[href^="logout"]')
        .should('be.visible')
        .and('contain', 'Sair')
        .click()
    cy.contains('Você saiu com sucesso!')
        .should('be.visible')
})

Cypress.Commands.add('realizarLogoutGerenciarConta', () => {
    cy.get('.user-name').click()
    cy.get('.management-options a[href^="logout"]').click()
    cy.contains('Você saiu com sucesso!').should('be.visible')
})