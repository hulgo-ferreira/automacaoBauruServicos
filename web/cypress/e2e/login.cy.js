import login from '../fixtures/login.json'

describe("Login", () => {
  it("Deve logar com sucesso", () => {

    const loginUsuario = login.sucesso

    cy.iniciarLogin(login.sucesso)
    cy.verificarLogin(loginUsuario.usuario)
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
    cy.verificarAlerta('E-mail', 'E-mail ou senha inválidos.')
  })

  it('Não deve fazer o login com senha incorreta', () => {

    const loginUsuario = login.senhaInvalida

    cy.iniciarLogin(login.senhaInvalida)
    cy.verificarAlerta('E-mail ou senha inválidos.') //Implementar a validação da mensagem com senha incorreta
  })

  it('Deve realizar logout com sucesso pelo dropdown', () => {
    
    const loginUsuario = login.sucesso

    cy.iniciarLogin(login.sucesso)
    cy.verificarLogin(loginUsuario.usuario)
    cy.realizarLogout()
  })

  it('Deve realizar logout pelo Gerenciar Conta', () => {
    
    const loginUsuario = login.sucesso

    cy.iniciarLogin(login.sucesso)
    cy.verificarLogin(loginUsuario.usuario)
    cy.realizarLogoutGerenciarConta()
  })
})
