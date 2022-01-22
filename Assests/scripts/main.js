const canvas = document.getElementById("mycanvas2")
let ctx2 = canvas.getContext("2d")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let quad = []

function render(){
    ctx2.fillStyle = "rgba(0,0,0,0.1)"
    ctx2.fillRect(0,0,window.innerWidth,window.innerHeight)
    for(let i = 0 ;i<quad.length;i++){
        draw(quad[i])
        Animate(quad[i],i)
    }
    requestAnimationFrame(render)
}
function draw(quad){
    ctx2.beginPath()
    ctx2.fillStyle = "rgba(255,0,0,0.3)"
    ctx2.rect(quad.x,quad.y,75,75)
    ctx2.fill()
    ctx2.closePath
}

function Animate(quad, i){
    quad.y+= quad.vy
}

render()

document.getElementById("yee").addEventListener("click",(r)=>{
    var r = Math.floor(Math.random() * (canvas.width+1))
    quad.push({
        x:r,
        y:-75,
        vy: Math.random()*5+2
    })
    console.log(quad)
})
