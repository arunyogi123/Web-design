/*let fullname="";
document.getElementById("get").addEventListener('click',function(){
    fullname=document.getElementById("username").value;
    alert("Hello "+fullname);
    alert("Welcome "+ document.getElementById("username").value );
});

document.getElementById("set").addEventListener('click',function(){
    document.getElementById("username").value="Arun Yogi";
})
document.getElementById("circle").addEventListener('mouseenter',function(){
    document.getElementById("circle").textContent="You hovered over the circle!";
});
document.getElementById("circle").addEventListener('mouseleave',function(){
    document.getElementById("circle").textContent="You hovered outside the circle!";
});
document.getElementById("circle").addEventListener('mousedown',function(){
    document.getElementById("circle").textContent="You clicked on the circle!";
});
document.getElementById("circle").addEventListener('mouseup',function(){
    document.getElementById("circle").textContent="You released the mouse button!";
});*/

document.getElementById("change").addEventListener('click',function(){
    document.getElementById("box").classList.add("circle");
})
document.getElementById("reset").addEventListener('click',function(){
    document.getElementById("box").classList.remove("circle");
})
document.getElementById("toggle").addEventListener('click',function(){
    document.getElementById("box").classList.toggle("circle");
})
