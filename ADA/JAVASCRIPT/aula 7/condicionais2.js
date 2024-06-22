//*| Switch cases - Muito útil quando sua variável possui valores específicos

const permissoes = 'aluno' //?| 'aluno', 'professor', 'admin'

switch(permissoes) {
    case 'aluno':
        console.log('Voce so pode visualizar as aulas')
        break
    case 'professor':
        console.log('Voce pode alterar as aulas e adicionar exercícios.')
        break
    case 'admin': 
        console.log('Voce pode fazer oque quiser no sistema')
        break
    default:
        console.log('nao sei quem você é no sistema')
}