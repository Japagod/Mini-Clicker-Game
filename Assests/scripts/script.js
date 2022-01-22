var yee = document.getElementById("yee")
var text = document.getElementById("text")
var qnt = 1
var t= true
var counter = 0
var c = document.getElementById("mycanvas")
var ctx = c.getContext("2d")
var nodes = {
    node:document.getElementById("drop"),
    node1:document.getElementById("drop1"),
    node2:document.getElementById("drop2"),
    node3:document.getElementById("drop3")
}
var items = {
    item1:document.getElementById("item1"),
    item2:document.getElementById("item2"),
    item3:document.getElementById("item3"),
    item4:document.getElementById("item4"),
    item5:document.getElementById("item5")
}
var comprado = {
    c1 : 0,
    c2 : 0,
    c3 : 0,
    c4 : 0,
    c5 : 0
}
var preços = {
    preço1:30,
    preço2:45,
    preço3:78,
    preço4:400,
    preço5:1000
}
            // ITEM 1
items.item1.addEventListener("mousedown",()=>{
    if(counter >= preços.preço1){
    items.item1.style.animation = "1s ease compra-inf forwards"
    qnt++
    counter = counter - preços.preço1
    preços.preço1=(preços.preço1+30)*1.43
    act()
    }else{
        alert("falta "+(preços.preço1-counter.toFixed(1))+" dinheiros")
    }
})
items.item1.addEventListener("mouseup",()=>{
    items.item1.style.animation = "1s ease compra-inf-up forwards"
    document.getElementById("n1").innerText++
})
            // ITEM 2
items.item2.addEventListener("mousedown",()=>{
    if(counter >= preços.preço2){
    
    items.item2.style.animation = "1s ease compra-inf forwards"
    qnt++
    counter = counter - preços.preço2
    preços.preço2=preços.preço2*2.2
    comprado.c2+=.1
    act()
    }else{
        alert("falta "+(preços.preço2-counter.toFixed(1))+" dinheiros")
    }
})
items.item2.addEventListener("mouseup",()=>{
    items.item2.style.animation = "1s ease compra-inf-up forwards"
    document.getElementById("n2").innerText++
})
            // ITEM 3
items.item3.addEventListener("mousedown",()=>{
    if(counter >= preços.preço3){
    
    items.item3.style.animation = "1s ease compra-inf forwards"
    qnt++
    counter = counter - preços.preço3
    preços.preço3=preços.preço3*3 
    comprado.c2+=.5
    act()
    }else{
        alert("falta "+(preços.preço3-counter.toFixed(1))+" dinheiros")
    }
})
items.item3.addEventListener("mouseup",()=>{
    items.item3.style.animation = "1s ease compra-inf-up forwards"
    document.getElementById("n3").innerText++
})
            // ITEM 4
items.item4.addEventListener("mousedown",()=>{
    if(counter >= preços.preço4){
    
    items.item4.style.animation = "1s ease compra-inf forwards"
    qnt++
    counter = counter - preços.preço4
    preços.preço4=preços.preço4*3 
    comprado.c2+=10
    act()
    }else{
        alert("falta "+(preços.preço4-counter.toFixed(1))+" dinheiros")
    }
})
items.item4.addEventListener("mouseup",()=>{
    items.item4.style.animation = "1s ease compra-inf-up forwards"
    document.getElementById("n4").innerText++
})
            // ITEM 5
items.item5.addEventListener("mousedown",()=>{
    if(counter >= preços.preço5){
    items.item5.style.animation = "1s ease compra-inf forwards"
    qnt++
    counter = counter - preços.preço5
    preços.preço5=preços.preço5*3 
    comprado.c2+=50
    act()
    }else{
        alert("falta "+(preços.preço5-counter.toFixed(1))+" dinheiros")
    }
})
items.item5.addEventListener("mouseup",()=>{
    items.item5.style.animation = "1s ease compra-inf-up forwards"
    document.getElementById("n5").innerText++
})

    setInterval(() => {
        if(comprado.c2>0){
            counter+=comprado.c2
            act()
        }
        if(comprado.c3>0){
            counter+=comprado.c3
            act()
            }
        if(comprado.c4>0){
            counter+=comprado.c4
            act()
        }   
        if(comprado.c5>0){
            counter+=comprado.c5
            act()
            }           
    }, 1000);

yee.addEventListener("mousedown", e => {
    yee.style.animation = "1s ease click forwards"
    document.getElementById("yee2").style.animation = ".1s ease click forwards"
    counter += qnt
    ctx.fillStyle = "#121224";
    ctx.fillRect(0, 0, 300, 150);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Seu dinheiro: "+counter.toFixed(1), 10, 75);
})
yee.addEventListener("mouseup", e => {
    document.getElementById("yee2").style.animation = ".32s ease release forwards"
    yee.style.animation = ".2s ease release forwards"
})
function act(){
    ctx.fillStyle = "#121224";
    ctx.fillRect(0, 0, 300, 150);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Seu dinheiro: "+counter.toFixed(1), 10, 75);
}
   act()
