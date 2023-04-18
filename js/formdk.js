// const nutDangKy = document.getElementById(signupbtn);

// nutDangKy.addEventListener('click', function(){
//     let xact = checkValidate();

//     if(xact){
//         message("Gửi đăng ký thành công!");
//     }
// });


// const hovaten = document.getElementById("hovaten");
// const nametk = document.getElementById("tentk");
// const pass1 = document.getElementById("matkhau");
// const pass2 = document.getElementById("nhaplai");
// const email = document.getElementById("email");


// function chekform(){
//     let nameVal = hovaten.value;
//     let pass1val = pass1.value;
//     let 
// }



function chekform(){
    var name = document.myform.hovaten.value;
    var pass1 = document.myform.matkhau.value;
    var pass2 = document.myform.nhaplai.value;
    var nametk = document.myform.tentk.value;
    var email = document.myform.email.value;


    if(name== "" || name== null){
        message("Vui lòng điền họ và tên!!");
        return false;
    }

    if(nametk == ""){
        message("Vui lòng điền tên tài khoản!!");
        return false;
    }


    if(email== ""){
        message("Vui lòng điền đầy đủ email!!");
        return false;
    }
    else if(!chekEmail(email)){
        message("Email không đúng định dạng!!")
        return false;
    }

    if(pass1==""){
        message("Vui lòng điền mật khẩu!!");
        return false;
    }

    
    if(pass1 == pass2){
        return true;
    }else{
        message("Mật khẩu không trùng khớp!!");
        return false;
    }
}


function chekEmail(e){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
}

function message(m){
    document.getElementById("checkform").innerHTML = m;
}


