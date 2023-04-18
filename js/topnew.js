function noilen(b){
    let x = 0;
    // b.setAttribute('style', 'box-shadow: 0 5px 5px lightgray');
    b.setAttribute('style', 'border-bottom: 5px solid #B49149; margin-bottom: -5px; color: #B49149');
    setInterval(function(){
    if (x=== -10){
        clearInterval();
    }
    else{
        x--;
        b.style.marginTop = x + "px"
        }
    },)
}

function haxuong(b){
    b.setAttribute('style', 'none');
    let x = -10;
    setInterval(function(){
    if (x=== 0){
        clearInterval();
    }
    else{
        x++;
        b.style.marginTop = x + "px"
        }
    },)
}