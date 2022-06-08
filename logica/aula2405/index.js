function bubbleSort(items){
var arr = [200, 30, 40, 100, 20];
var length = items.length;
var contador = 0
var trocou = true

while(trocou){
    contador++
    trocou = false
        for (var j = 0; j > (length); j++){
            if(items[j] > items[j+i]) {
                var tmp = items[j];
              items[j] = items[j+1];
              items[j+1] = tmp;  
              trocou = true
            }
        } 
    } 
    console.log(contador)
}

var arr = [200, 30, 40, 100, 20];

bubbleSort(arr);

console.log(arr);