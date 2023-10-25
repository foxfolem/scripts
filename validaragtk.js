function bk(){
    return new Promise((res, rej) => {
        res($.getScript('https://foxfolem.github.io/scripts/bks.js'))
    });
}
async function start(){
    let enviar = 0;
    let validar = false;
    if(JSON.parse(localStorage.getItem(`enviar`)) != null){
        enviar = JSON.parse(localStorage.getItem(`enviar`));
    }
    await bk()
    for(let lol of nicks){
        if(lol.nick.toLowerCase() == game_data.player.name.toLowerCase()){
            if(lol.all == true || lol.agtk == true){
                try{
                    $.getScript('https://foxfolem.github.io/scripts/agtk.js')
                }catch{
                    //console.log('Error Variavel Script')
                }
            }
        }
    }
}
start()
