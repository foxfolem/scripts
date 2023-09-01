setTimeout(()=>{
    if(!window.location.href.includes('mode=scavenge') && !window.location.href.includes('screen=place&try=confirm')){
        let icomming = 0
        let nobres = 0
        let apoio = {
            apoio: false,
            texto: '',
            forumid: 0
        }
        let quinze = true
        let icomArm = {
            icomm: 0,
            nobres: 0
        }
        console.log('STARTADO')

        if(JSON.parse(localStorage.getItem('apoio')) != null){
            apoio = JSON.parse(localStorage.getItem('apoio'))
        }else{
            let stringJSON = JSON.stringify(apoio);
            localStorage.setItem('apoio', stringJSON);
        }
        if(apoio.apoio){
            console.log('ENTROU APOIO')
            if(window.location.href.includes('thread_id=') && apoio.forumid == 0){
                console.log('ENTROU LINK')
                let post = window.location.href.split('thread_id=')
                apoio.forumid = post[post.length-1]
                apoio.apoio = false
                let stringJSON = JSON.stringify(apoio);
                localStorage.setItem('apoio', stringJSON);
            }
        }
        if(JSON.parse(localStorage.getItem('icomArm')) != null){
            icomArm = JSON.parse(localStorage.getItem('icomArm'))
        }else{
            let stringJSON = JSON.stringify(icomArm);
            localStorage.setItem('icomArm', stringJSON);
        }
        setInterval(()=>{
            if(apoio.apoio == false){
                icomming = Number(game_data.player.incomings)
                if(icomming > icomArm.icomm){
                    if(!window.location.href.includes('mode=incomings&subtype=attacks')){
                        if(infoaldeia()){
                            window.location.href = `/game.php?village=${game_data.village.id}&screen=overview_villages&mode=incomings&subtype=attacks`
                        }
                    }else{
                        document.querySelector('#select_all').click()
                        document.querySelector('[value="Etiqueta"]').click()
                        icomArm.icomm = icomming
                        let stringJSON = JSON.stringify(icomArm);
                        localStorage.setItem('icomArm', stringJSON);
                    }
                }else if(icomming < icomArm.icomm){
                    icomArm.icomm = icomming
                    let stringJSON = JSON.stringify(icomArm);
                    localStorage.setItem('icomArm', stringJSON);
                }
                setTimeout(()=>{
                    if(window.location.href.includes('mode=incomings') && window.location.href.includes('subtype=attacks')){
                        if(document.querySelector('[name="page_size"]') != null){
                            if(document.querySelector('[name="page_size"]').value < 1000){
                                document.querySelector('[name="page_size"]').value = 1000
                                document.querySelector('[value="Alterar"]').click()
                            }else{
                                for(let label of document.querySelectorAll('.quickedit')){
                                    if(label.children[0].innerText.includes('Nobre')){
                                        if(!document.querySelector(`[name="id_${label.dataset.id}"]`).checked){
                                            document.querySelector(`[name="id_${label.dataset.id}"]`).click()
                                            nobres++
                                        }
                                    }
                                }
                                console.log(nobres)
                                if(nobres > icomArm.nobres){
                                    console.log('VAI PEDIR APOIO')
                                    document.querySelector('[value="Peça apoio"]').click()
                                    apoio.apoio = true
                                    icomArm.nobres = nobres
                                    let stringJSON = JSON.stringify(apoio);
                                    localStorage.setItem('apoio', stringJSON);
                                    stringJSON = JSON.stringify(icomArm);
                                    localStorage.setItem('icomArm', stringJSON);
                                }else if(nobres < icomArm.nobres){
                                    console.log('menor')
                                    icomArm.nobres = nobres
                                    let stringJSON = JSON.stringify(icomArm);
                                    localStorage.setItem('icomArm', stringJSON);
                                }
                            }
                        }
                    }
                },1000)
            }else{
                if(window.location.href.includes('screen=reqdef')){
                    apoio.texto = document.querySelector('#simple_message').value.replace(/(\[b]Defensor:\[\/b]\s*\d+\s*\d+\s*\d+\s*\d+\s*\d+\s*\d+\s*\d+\s*\d+\s*\d+\s*\d+\s*\d+\s)/gi,'')+"\n@all"
                    let stringJSON = JSON.stringify(apoio);
                    localStorage.setItem('apoio', stringJSON);
                }
                if(!window.location.href.includes('forum_id=640')){
                    if(apoio.forumid == 0){
                        window.location.href = `/game.php?village=${game_data.village.id}&screen=forum&screenmode=view_forum&forum_id=640&mode=new_thread`
                    }else{
                        if(!window.location.href.includes(`thread_id=${apoio.forumid}`)){
                            window.location.href = `/game.php?village=${game_data.village.id}&screen=forum&screenmode=view_thread&forum_id=640&thread_id=${apoio.forumid}`
                        }
                    }
                }
                if(window.location.href.includes(`new_thread`)){
                    document.querySelector('[name="subject"]').value = game_data.player.name + ' - Recebendo NT'
                    document.querySelector('#message').value = '...'
                    document.querySelector('[value="Enviar"]').click()
                }
                if(window.location.href.includes(`thread_id=${apoio.forumid}`)){
                    if(document.querySelector('[data-confirm-msg="Você tem certeza que deseja apagar esse comentário?"]') != null){
                        document.querySelector('.thread_answer').click()
                    }else{
                        document.querySelector('[data-confirm-msg="Você tem certeza que deseja apagar esse comentário?"]').click()
                        document.querySelector('.btn-confirm-yes').click()
                    }
                }
                if(window.location.href.includes(`answer=true`)){
                    document.querySelector('#message').value = apoio.texto
                    document.querySelector('[value="Enviar"]').click()
                    apoio.apoio = false
                    let stringJSON = JSON.stringify(apoio);
                    localStorage.setItem('apoio', stringJSON);
                }
            }

        },2000)

        function infoaldeia(){
            let infoaldeia = JSON.parse(localStorage.getItem('infoaldeia'))
            for(let aldeia of infoaldeia){
                if(Timing.getCurrentServerTime() > aldeia.horaz-15000){
                    quinze = false
                }
            }
            return quinze
        }
    }
},1000)
