const box = document.querySelector('.box-caja');
const txtcolor = document.querySelector('#color')
let colorlist = ['A','B','C','D','F']

function cambiocolor(){

    let color = '#'

    for(let i = 0; i<10; i++){
        colorlist.push(String(i))
    }
    
    for(let i = 0 ; i < 6 ; i++){
        const n = Math.floor(Math.random()* 15)
        color +=String(colorlist[n])
    }

    box.style.backgroundColor = color;
    txtcolor.innerHTML = `Background Color : ${color}`
}
