// Adicionando a animação conforme movimentação do mouse
const card = document.querySelector('.card')
const container = document.querySelector('.container')

//itens do card
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const logo = document.querySelector('.logo img')

const text = document.querySelector('.description')



container.addEventListener('mousemove', e => {
    // console.log(e.pageX, e.pageY)
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
container.addEventListener('mouseenter', e => {
    card.style.transition = "all 0.5s ease-out"
    title.style.transform = 'translateZ(100px)'
    sneaker.style.transform = 'translateZ(150px)'
    sneaker.style.transition = 'all 0.5s ease-out'
    logo.style.transform = 'translateZ(50px)'
    text.style.transition = "all 0.5s ease-in"
    text.style.transform = 'translateZ(50px)'
})

    //Card e itens retornam a posição original
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease'
    title.style.transform = 'translateZ(0px)'
    sneaker.style.transform = 'translateZ(0px)'
    logo.style.transform = 'translateZ(0px)'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    text.style.transition = "all 0.5s ease-out"
    text.style.transform = 'translateZ(0px)'
    

})