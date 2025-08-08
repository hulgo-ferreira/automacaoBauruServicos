import cadastros from '../fixtures/cadastroPrestador.json'

describe('Cadastro', () => {

    before(() => {
        cy.task('queryDb', "DELETE FROM profissional WHERE email = 'teste@gmail.com'")
    });

    it('Deve cadastrar prestador com sucesso', () => {

        const cadastro = cadastros.sucesso

        cy.visit("/index.php") //pré-condição

        cy.iniciarCadastro()
        cy.preencherProfissional(cadastro.nome_profissional)
        cy.preencherProfissao(cadastro.profissao)
        cy.preencherDataNascimento(cadastro.data_nascimento)
        cy.preencherTempoProfissao(cadastro.tempo_profissao)
        cy.preencherDescricaoProfissao(cadastro.descricao)
        cy.preencherTelefone(cadastro.telefone)
        cy.preencherEndereco(cadastro.endereco)
        cy.prestaServicos()
        cy.preencherEmailSenha(cadastro.email, cadastro.senha)
        
        cy.contains('button', 'Cadastrar')
            .click()
    })

    it('Não deve cadastrar prestador duplicado', () => {

        const cadastro = cadastros.cadastro_duplicado

        cy.visit("/index.php") //pré-condição

        cy.iniciarCadastro()
        cy.preencherProfissional(cadastro.nome_profissional)
        cy.preencherProfissao(cadastro.profissao)
        cy.preencherDataNascimento(cadastro.data_nascimento)
        cy.preencherTempoProfissao(cadastro.tempo_profissao)
        cy.preencherDescricaoProfissao(cadastro.descricao)
        cy.preencherTelefone(cadastro.telefone)
        cy.prestaServicos()
        cy.preencherEmailSenha(cadastro.email, cadastro.senha)

        cy.contains('button', 'Cadastrar')
            .click()
        cy.verificarCadastro('O telefone informado já está cadastrado para outro profissional.')
    })
})

