


function chekform(){
    var pass1 = document.myform.matkhau.value;
    var nametk = document.myform.tentk.value;
   
    if(nametk == ""){
        message("Vui lòng điền tên tài khoản!!");
        return false;
    }



    if(pass1==""){
        message("Vui lòng điền mật khẩu!!");
        return false;
    }

}


function chekEmail(e){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
}

function message(m){
    document.getElementById("checkform").innerHTML = m;
}


