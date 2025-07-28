/* Index */
/* Zoom a las letras */
const texto = document.getElementById("zoom")

texto.addEventListener('mouseover', ()=>{
    texto.style.fontSize = '3em' /* Aumentara el tamaño de la fuente */

})
texto.addEventListener('mouseout',() =>{
    texto.style.fontSize ='1.5em'//Vuevel al tamaño comun
})

/* Letras de remeras de mujer */
const remerasMujer = document.getElementById('zoomm')

remerasMujer.addEventListener('mouseover', () =>{
    remerasMujer.style.fontSize = '2em'
})
remerasMujer.addEventListener('mouseout' ,() => {
    remerasMujer.style.fontSize = '1.5em'
})

/* Letras de remeras de hombre */
const hombre = document.getElementById('zoomm1')
hombre.addEventListener('mousemove', ()=>{
    hombre.style.fontSize = '1.7em'
})
hombre.addEventListener('mouseout', ()=>{
    hombre.style.fontSize = '1.5em'
})