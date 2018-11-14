/*
DOM (HTML)
    - <head>
        - <meta>
        - <meta>
        - <meta>
        - <title>
        - <script>
    - <body>
        - <p>


    document.querySelector('p')
*/

const botao = document.querySelector('button');
const quadrado = document.querySelector('.quadrado');
const rodarQuadrado = () => {
    quadrado.classList.toggle('rodando');
};
botao.onclick = rodarQuadrado;

