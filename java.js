function Daralerta(texto){
    var texticulo =document.getElementById("bolaesquerda").value
    window.alert("seu amigo é o mais" + texticulo);
}

Daralerta("conteudo");
















//window.alert ("esse é um alerta");
console.log ("essa mensagem está escondida");
document.getElementById("testeID").innerHTML="voçê é de maior"
document.getElementById("bodinho").style.setProperty("background-color","GREEN")

var entrada  =prompt("entre com a sua idade");

console.log("entrada");

entrada= parseInt(entrada);

if(entrada>=18){
    console.log("voce é maior");
}else if (entrada<18){ 
    console.log("você é de menor");
}else{
    console.log("invalido");
}

