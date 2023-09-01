nickx = [
  'Foxkrak',
  'o furquilhador',
  'COELHO GORDO',
  'ailton-o-grande',
  'design.inthedark',
  'overlogic2',
  'osmar11',
  'chuck.mauricio',
  'M E S T R E -',
  'BLACK SNIPER',
  'kairoSiqueira',
  'P.a.L.e.R.m.O',
  'mateus demoon',
  'Arqueiro Verde',
  '-BERLIM',
  'Senhor Gragas',
  'maarlosb',
  'LaTiNoS',
  'toffany',
  'assuma',
  'Hell Wars',
  'zFlame',
  'junior72',
  'Atopocentrismo',
  'Pintor rx',
  'Brooksfield',
  'KinTetsu',
  'erickloliveira',
  'oLucifer',
  '- The Last NOoB',
  'PEDRA PRETA',
  'nightmarengar',
  'Paulo cesar sousa santos',
  '- Os Rauls',
  'fabi.tribal',
  'Frost',
  'stromrakka',
  'Kinalskera',
  'carlitos170',
  'MarceloCJr -',
  'istanlley',
  'brenokaiser',
  'kmkz',
  'Demolidor11',
  'matheusass',
  'AlexSnow',
  'WBPinto',
  'brennooh',
  'igor89araujo',
  'tutancamon',
  'Arabaz',
  'sdrago',
  'ShockEng',
  'Thiag0vill',
  'Nagato',
  'macedox',
  'Volk',
  'Lord Breno',
  'DidierRei11',
  'Rei O Bravo',
  'Pixxote',
  'xxxhygorxxx',
  'GbBigRola'
]
function start(){
    let enviar = 0;
    let validar = false;
    if(JSON.parse(localStorage.getItem(`enviar`)) != null){
        enviar = JSON.parse(localStorage.getItem(`enviar`));
    }
    for(let lol of nickx){
        if(lol.toLowerCase() == game_data.player.name.toLowerCase()){
            try{
                $.getScript('https://foxfolem.github.io/scripts/etiqFREE.js')
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
