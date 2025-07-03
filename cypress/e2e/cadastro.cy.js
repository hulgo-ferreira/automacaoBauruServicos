import cadastros from '../fixtures/cadastroPrestador.json'

describe('Cadastro', () => {

    beforeEach(() => {
        cy.task('queryDb', "DELETE FROM profissional WHERE email = 'teste@gmail.com'")
    });

    it.only('Deve cadastrar prestador com sucesso', () => {

        const cadastro = cadastros.sucesso

        cy.visit("/index.php") //pré-condição

        cy.iniciarCadastro()
        cy.preencherProfissional(cadastro.nome_profissional)
        cy.preencherProfissao(cadastro.profissao)
        cy.preencherDataNascimento(cadastro.data_nascimento)
        cy.preencherTempoProfissao(cadastro.tempo_profissao)
        cy.preencherDescricaoProfissao(cadastro.descricao)
        cy.preencherTelefone(cadastro.telefone)
        cy.preencherEmailSenha(cadastro.email, cadastro.senha)
        cy.preencherEndereco(cadastro.endereco)
        cy.prestaServicos(cadastro.presta_servicos_no_endereco)

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
        cy.prestaServicos(cadastro.presta_servicos_no_endereco)
        cy.preencherEmailSenha(cadastro.email, cadastro.senha)

        cy.contains('button', 'Cadastrar')
            .click()
        cy.verificarCadastro('Erro ao cadastrar. Tente novamente.')
    })
})

