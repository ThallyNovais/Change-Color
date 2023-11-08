var btnChangeColor = document.getElementById("btnChangeColor");
var changeColor = document.getElementById("changeColor");
var body = document.getElementById("body")

var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");

btnChangeColor.addEventListener('click', function(){
    //Se os valores forem maior do que 255
    if(r.value > 255 || g.value > 255 || b.value > 255){
        btnChangeColor.style.cssText = (
            "transition: 0.2s;" +
            "background-color: red;"
        )
        btnChangeColor.innerText = "Invalid value"
    }
    else if(r.value == "" || g.value == "" || b.value == ""){
        btnChangeColor.style.cssText = (
            "transition: 0.2s;" +
            "background-color: red;"
        )
        btnChangeColor.innerText = "Insert a value"
    }
    //Se os valores forem menor do que 0
    else if(r.value < 0 || g.value < 0 || b.value < 0){
        btnChangeColor.style.cssText = (
            "transition: 0.2s;" +
            "background-color: red;"
        )
        btnChangeColor.innerText = "Invalid value"
    }
    //Se tudo estiver correto
    else{
        body.style.cssText = (
            "transition: 0.2s;" +
            `background-color: rgb(${r.value}, ${g.value}, ${b.value});`
        )
        btnChangeColor.style.cssText = (
            "transition: 0.2s;" +
            "background-color: rgb(43, 123, 226);"
        )
        btnChangeColor.innerText = "Set color"
    }
}); 

