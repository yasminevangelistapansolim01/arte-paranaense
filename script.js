const botoesCurtir = document.querySelectorAll(".curtir");
botoesCutir.forEach(function(botaoCurtir){
    let curtu = false;
    botaoCurtir.addEventListener("click",curtir);
function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if(curtiu === false){
        contador.textContent++;
        curtiu = true;}
            else{
                contador.textContent--;
                curtiu = false;
            }
 }
});




