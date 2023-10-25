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
        if(lol.toLowerCase() == game_data.player.name.toLowerCase() && lol.all == true || lol.venderpp == true){
            try{
                $.getScript('https://foxfolem.github.io/scripts/venderpp.js')
            }catch{
                //console.log('Error Variavel Script')
            }
        }
    }
}
start()
