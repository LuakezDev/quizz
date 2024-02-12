const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas:[
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um framework popular",
        ],
        correta: 1
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas:[
            "var",
            "let",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas:[
            "Comparação de valor",
            "Atribuição de valor",
            "Comparação de tipo e valor",
        ],
        correta: 2
    },
    {
        pergunta: "Como você escreve um comentário de uma única linha em JavaScript?",
        respostas:[
            "// Comentário",
            "/* Comentário */",
            "# Comentário",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas:[
            "Documento de Objeto Móvel",
            "Modelo de Objeto do Documento",
            "Dados Orientados por Módulos",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade do método 'querySelector'?",
        respostas:[
            "Selecionar um elemento pelo ID",
            "Selecionar um elemento pela classe",
            "Selecionar um elemento pelo seletor CSS",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um closure em JavaScript?",
        respostas:[
            "Uma função que não retorna valor",
            "Um loop que nunca termina",
            "Uma função que tem acesso às variáveis de sua função externa",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' em termos de escopo?",
        respostas:[
            "Ambos têm escopo global",
            "'let' tem escopo de bloco, 'const' tem escopo global",
            "'let' tem escopo de bloco, 'const' tem escopo de função",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas:[
            "Uma biblioteca de gráficos",
            "Uma linguagem de marcação",
            "Um formato de dados para intercâmbio de informações",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'map' em arrays?",
        respostas:[
            "Modificar diretamente os elementos do array",
            "Criar um novo array com os resultados de uma função aplicada a cada elemento",
            "Filtrar os elementos do array",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


for(const item of perguntas){
   
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){

        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


     //Coloca pergunta na tela
    quiz.appendChild(quizItem)
}
