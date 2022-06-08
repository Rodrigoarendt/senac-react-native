var data = new Date()
var dia = data.getDay()

switch(dia){
    case 0:
        console.log("domingo")
        break;
    case 1: 
        console.log("Segunda")
        break;
    case 2: 
        console.log("Terça")
        break;
    case 3: 
        console.log("Quarta")
        break; 
     case 4: 
        console.log("Quinta")
        break;
    case 5: 
        console.log("Sexta")
        break;      
    default:
        console.log("Dia Inexustente")           
}