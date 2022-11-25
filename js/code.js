const bitcoin = document.getElementById('b')
const animation = bitcoin.animate([
    {
        transform: 'rotateY(0)'
    },
    {
        transform: 'rotateY(360deg)'
    }

],{
    duration:3000,
    direction:'normal',
    easing:'linear',
    iterations:Infinity
})

const playButton = document.getElementById('boton')

playButton.addEventListener('click' , ()=>{
    animation.boton()
})