function ola(){
    console.log('ola')
}

function tchau(){
    console.log('tchau')
}

function conversa(){
    console.log('tudo bem') 
}

function discussao(){
    console.log('asasasasas') 
}

function conversao(){
    console.log('conversa muito longa') 
}

function testeSettimeOut(callback, time){
    setTimeout(callback,time)
}

/**invocando função  */
ola()
testeSettimeOut(conversa, 10000)
testeSettimeOut(discussao, 7000)
testeSettimeOut(conversa, 3000)
tchau()