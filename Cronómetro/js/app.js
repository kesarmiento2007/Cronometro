document.addEventListener("DOMContentLoaded", function(){
    iniciarApp();
});

function iniciarApp(){
    cronometro();
}

function cronometro(){
    const ms = document.querySelector(".ms");
    const s = document.querySelector(".s");
    const m = document.querySelector(".m");
    const h = document.querySelector(".h");
    const reiniciar = document.querySelector(".reiniciar");
    const play = document.querySelector(".play");
    const iconoPlay = document.querySelector(".icono-play");
    let ejecucion;
    let dosNum;

    reiniciar.addEventListener("click", function(){
        ms.innerHTML = "00";
        s.innerHTML = "00";
        m.innerHTML = "00";
        h.innerHTML = "00";

        clearInterval(ejecucion);

        if(play.classList.contains("pausa")){
            play.classList.toggle("pausa");
            iconoPlay.name = "play-outline";
        } 
    });

    play.addEventListener("click", function(){
        play.classList.toggle("pausa");

        if(play.classList.contains("pausa")){
            iconoPlay.name = "pause-outline";
            reproduccion(true);
        } else{
            iconoPlay.name = "play-outline";
            reproduccion();
        }
    });

    function reproduccion(pausa=false){
        let milisegundos = parseInt(ms.innerHTML);
        let segundos = parseInt(s.innerHTML);
        let minutos = parseInt(m.innerHTML);
        let horas = parseInt(h.innerHTML);
    
        if(pausa){

            ejecucion = setInterval(() => {
                if(milisegundos === 99){
                    milisegundos = 0;
                    ms.innerHTML = "00";
                    segundos++;
                    dosNum = segundos.toString().padStart(2, "0");
                    s.innerHTML = dosNum.toString();
                }
                if(segundos > 59){
                    segundos = 0;
                    s.innerHTML = "00";
                    minutos++;
                    dosNum = minutos.toString().padStart(2, "0");
                    m.innerHTML = dosNum.toString();
                }
                if(minutos > 59){
                    minutos = 0;
                    m.innerHTML = "00";
                    horas++;
                    dosNum = horas.toString().padStart(2, "0");
                    h.innerHTML = dosNum.toString();
                }

                milisegundos++
                dosNum = milisegundos.toString().padStart(2, "0");
                ms.innerHTML = dosNum.toString();
            }, 10);

        } else{
            clearInterval(ejecucion);
        }
    }
}