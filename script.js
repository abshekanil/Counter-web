let num = 0;
let btnDec = document.getElementById('btnDec');
let btnInc = document.getElementById('btnInc');
let btnRestart = document.getElementById('btnRestart');
let displayCount = document.getElementById('displayCount');

btnDec.addEventListener("click", function(){
    if(num > 0)
    {
        num--;
        displayCount.innerHTML = num;
    }
});

btnInc.addEventListener("click", function(){
    num++;
    displayCount.innerHTML = num;
});

btnRestart.addEventListener("click", function(){
    num = 0;
    displayCount.innerHTML = num;
});
