function ola(){
    console.log('ola')
    
}


function bom(){
    setTimeout(
        function(){
            console.log('Tenha um bom dia ?')
        }, 500)
    console.log('bom')
}

function conversa(){
    setTimeout(
        function(){
          console.log('como vai!')
    }, 1000)
    console.log('tudo bem ?')
}

function tchau(){
    setTimeout(
        function(){
            console.log('Estou indo embora?')
        }, 2000)
    console.log('tchau')
}


ola()
bom()
conversa()
tchau()

