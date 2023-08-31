let linkx = `/game.php?village=${game_data.village.id}&screen=overview_villages&mode=incomings&subtype=attacks`
let atks = 0;
let att;
let getatks;
console.log('fooi')
if(!window.location.href.includes('screen=place&try=confirm') && !window.location.href.includes('screen=main') && !window.location.href.includes('mode=scavenge') && !window.location.href.includes('screen=am_farm')){
    (function() {
        'use strict';
        setInterval(()=>{
            atks = Number(document.querySelector('#incomings_amount').innerText)
            getatks = JSON.parse(localStorage.getItem('getatks'));
            if(getatks > atks){
                let stringJSON = JSON.stringify(atks);
                localStorage.setItem('getatks', stringJSON);
            }
            if(window.location.href == window.location.origin +`/game.php?village=${game_data.village.id}&screen=overview_villages&mode=incomings&subtype=attacks`){
                console.log('Ataques Atuais: '+ atks +' Ataques ja Etiquetados: ' + getatks)
            }
        },100)
        setInterval(()=>{
            if(atks != undefined){
                if(getatks != undefined){
                    if(getatks < atks){
                        console.log("get menor q atk")
                        if(window.location.href != window.location.origin + linkx){
                            window.location.href = linkx
                        }
                    }
                }else{
                    if(window.location.href != window.location.origin + linkx){
                        window.location.href = linkx
                    }
                }
            }
            if(window.location.href == window.location.origin + linkx){
                if(getatks != null || getatks != undefined){
                    if(getatks < atks){
                        etiquetar();
                    }
                }else if(atks != 0){
                    etiquetar();
                }else{
                    let stringJSON = JSON.stringify(0);
                    localStorage.setItem('getatks', stringJSON);
                }
            }
        },20000)

        function etiquetar(){
            document.querySelector('#select_all').click()
            setTimeout(()=>{
                document.querySelector('[value="Etiqueta"]').click()
                let stringJSON2 = JSON.stringify(atks);
                localStorage.setItem('getatks', stringJSON2);
            },300)
        }
    })();
}
