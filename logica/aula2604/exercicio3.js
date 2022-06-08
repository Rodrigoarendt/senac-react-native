function calcular(){
   var nome = document.getElementById("nome").value
   var n1 = parseFloat(document.getElementById("nota1").value)
   var n2 = parseFloat(document.getElementById("nota2").value)
   var n3 = parseFloat(document.getElementById("nota3").value)
   
   var situacao = "aprovado"
   
   var media = (n1 + n2 + n3)/3
   
   if(media < 7) {
     situacao = "reprovado"   
   }
   
   document.getElementById("media").value = media.toFixed(2)
   document.getElementById("situacao").innerHTML =  `${nome} sua média é ${media}, sua situação é ${situacao}`
}




