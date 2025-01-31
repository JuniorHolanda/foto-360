const input = document.querySelector('#input')
const imagem = document.querySelector('#imagem')


input.addEventListener('input', ()=>{
    imagem.src = `img/${input.value}.jpg`
});