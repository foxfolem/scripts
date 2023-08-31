function bk(){
    return new Promise((res, rej) => {
        res($.getScript('https://foxfolem.github.io/scripts/bk.js'))
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
            console.log('Validado.')
            $.getScript(`https://foxfolem.github.io/scripts/${script}.js`)
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
      }else{
        alert('Essa conta não tem acesso a esse script.')
      }
    }
}
start()
