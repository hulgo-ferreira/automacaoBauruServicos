import login from '../fixtures/login.json'

describe("Login", () => {
  it("Deve logar com sucesso", () => {

    const loginUsuario = login.sucesso

    cy.iniciarLogin(login.sucesso)
    cy.verificarLogin(login.usuario)
  })

  it('Campos obrigatórios', () => {

    const loginUsuario = login.emailInvalido

    cy.iniciarLogin()
    cy.verificarAlerta('E-mail', 'O campo e-mail é obrigatório.')
    cy.verificarAlerta('Senha', 'O campo senha é obrigatório.')
  })

  it('Não deve fazer o login com e-mail incorreto', () => {

    const loginUsuario = login.emailInvalido

    cy.iniciarLogin(login.emailInvalido)
    cy.verificarAlerta('E-mail', 'Formato de e-mail inválido. Ex: contato@dominio.com')
  })

  it('Não deve fazer o login com senha incorreta', () => {

    const loginUsuario = login.senhaInvalida

    cy.iniciarLogin(login.senhaInvalida)
    cy.verificarAlerta('Senha', 'E-mail ou senha inválidos.') //Implementar a validação da mensagem com senha incorreta
  })
})
