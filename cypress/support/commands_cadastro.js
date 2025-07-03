Cypress.Commands.add("iniciarCadastro", () => {
  cy.get('header nav a[href ^="cadastro"]').click()
  cy.get("h2").should("be.visible").and("have.text", "Formulário de Cadastro")
})

Cypress.Commands.add("preencherProfissional", (nome) => {
  cy.get("#nome_profissional").type(nome)
})

Cypress.Commands.add("preencherProfissao", (profissao) => {
  cy.contains("label", "Profissão")
    .parent()
    .find("select")
    .select(profissao)
})

Cypress.Commands.add("preencherDataNascimento", (data) => {
  cy.get('input[id="data_nascimento"]').type(data)
})

Cypress.Commands.add("preencherTempoProfissao", (tempo) => {
  cy.get('input[id="tempo_profissao"]').type(tempo)
})

Cypress.Commands.add("preencherDescricaoProfissao", (descricao) => {
  cy.get('textarea[id="descricao"]').type(descricao)
})

Cypress.Commands.add("preencherTelefone", (telefone) => {
  cy.get('input[id="telefone"]').type(telefone)
})

Cypress.Commands.add("prestaServicos", (opcao) => {
  cy.contains("label", "Presta serviços no endereço informado?")
    .parent()
    .find("select")
    .select(opcao)
})

Cypress.Commands.add("preencherEndereco", (endereco) => {
    cy.get('input[id="endereco"]').type(endereco)
  })

Cypress.Commands.add("preencherEmailSenha", (email, senha) => {
  cy.get("#email").type(email)
  cy.get("#senha").type(senha)
  cy.get("#confirmar_senha").type(senha)
  cy.get("#aceite_termos").click()
})

Cypress.Commands.add('verificarCadastro', (texto) => {
    cy.contains('p.message.error', texto)
        .should('be.visible')
        .and('contain.text', texto)
})


// Campos obrigatórios:
//     nome
//     profissão
//     data de nascimento
//     tempo de profissao
//     descrição

// Opcional:
//     telefone