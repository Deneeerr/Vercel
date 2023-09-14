const buttons = document.querySelectorAll('button');
const infoDiv = document.getElementById('frase');
const motivationButton = document.getElementById('motivation-button');

const motivationalPhrases = [
    "Se vc estender a mão e ninguém segura-lá  coloque-a no bolso e siga em frente",
    "Até a jornada de mil milhas começa com um pequeno passo.",
    "Só há um tempo em que é fundamental despertar. Esse tempo é agora.",
    "A diferença entre ganhar e perder geralmente é não desistir.",
    "O homem começa a morrer na idade em que perde o entusiasmo.",
    "A vida verdadeira é vivida quando pequenas mudanças acontecem.",
    "A sabedoria é basicamente honestidade de pensamento.",
    "Mude a maneira como você vê as coisas e as coisas que você vê mudam.",
    "Mude seus pensamentos e mude seu mundo.",
    "Se você quiser mudar o mundo, pegue sua caneta e escreva.",
    "Quem olha para fora, sonha; quem olha para dentro, acorda.",
    "Se você pode sonhar, você pode fazer.",
    "Faça o que puder, com o que tiver, onde estiver.",
    "Você é muito poderoso, desde que saiba como você é poderoso.",
    "Aja como se o que você faz, faz a diferença. Porque faz.",
    "Não sei aonde vou, mas já estou no caminho.",
    "Feliz aquele que transfere o que sabe e aprende o que ensina.",
    "Você pode tudo se tiver entusiasmo.",
    "Cada sonho que você deixa para trás é um pedaço do seu futuro que deixa de existir.",
    "A maior aventura que você pode viver é viver a vida dos seus sonhos.",
    "Vença a si mesmo e terá vencido o seu próprio adversário.",
    "Se você realmente quer que aconteça, vá atrás e não desista.",
    "Você não pode mudar o ontem, mas pode fazer o amanhã melhor.",
    "Por mais longa que seja a caminhada, o mais importante é dar o primeiro passo.",
    "Acredite, você tem forças para chegar onde quiser. Basta querer.",
    "Aprenda a amar, sem esperar muito dos outros.",
    "Seja conhecido pelo seu jeito bonito de ver a vida.",
    "Imagine uma nova história para a sua vida e acredite nela.",
    "Tudo o que é seu encontrará uma maneira de chegar até você.",
    "Já experimentou acreditar em você? Tente! Você não faz ideia do que é capaz.",
    "Não erramos. Apenas aprendemos.",
    "A vida tem a cor que você pinta.",
    "Sucesso é o que temos quando transformamos a nossa motivação em atitude.",
    "Duvide do que vem fácil. E não desista do que é difícil.",
    "Agarre suas oportunidades, pois: a capacidade pouco vale sem oportunidade.",
    "Motivação é o que movimenta o universo a conspirar sempre ao seu favor.",
    "Sucesso é o que temos quando transformamos nossa motivação em atitude",
    "Adote um estilo e escolha o seu caminho. Seja você mesmo antes de tudo.",
    "Você é do tamanho do seu sonho.",
    "Que não se tenha pressa, mas que também não se perca tempo.",
    "Tenha novos objetivos! Mas tenha também metas para realiza-los.",
    "Sonhe. Lute. Conquiste. Tudo é possível. Você nasceu para vencer.",
    "Uma vida não basta ser vivida. Ela precisa ser sonhada.",
    "No meio da dificuldade encontra-se a oportunidade.",
    "O amor é uma força que transforma o destino.",
    "Todas as manhãs nós nascemos de novo. O que fazemos hoje é o que mais importa.",
    "A vida é maravilhosa se não se tem medo dela.",
    "Tenho em mim todos os sonhos do mundo.",
    "Não existe o bom ou o mau, é o pensamento que os faz assim",
    "Nada na vida fará você ser feliz, até que você escolha ser feliz",
    "Nada é tão nosso quanto os nossos sonhos",
];

motivationButton.addEventListener('click', () => {
const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
infoDiv.textContent = motivationalPhrases[randomIndex];
});

function alunos(){
    alert("\nAlexsander - Programação\nBernardo - Hospedagem\nVicthor - Slides");
}