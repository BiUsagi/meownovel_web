//hieu ung ngoai san pham
function onboxshad(box){
    let y = box.getElementsByClassName("thao-tacsp");
    var x = 70;
    var z = 0.1;

    box.setAttribute("style", "box-shadow: 0 5px 7px gray;") 

    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "block";    
        // y[i].style.filter = "opacity("+ x + ")";
    }
    
    setInterval(function(){
        if (x === 100){
            clearInterval();
        }
        else{
            // z += 0.02;
            x += 1;
            for (var i = 0; i < y.length; i++) {
                y[i].style.filter= "brightness("+x+"%)";
                // y[i].style.filter= "opacity("+ z + ")";
            }
        }
    },10)
    
}

function outboxshad(box){
    var x = 1;
    let y = box.getElementsByClassName("thao-tacsp");
    box.setAttribute("style", "box-shadow:none;")
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "none";
        y[i].style.filter = "none";
    }
}


//chi tiết sản phẩm
function hide(){
    document.getElementById("san-pham").classList.add("none1");
    document.getElementById("new-sp").classList.remove("none1")
    document.getElementById("sanpham4").classList.remove("none1");
    document.getElementById("sanpham3").classList.remove("none1");
}


var buys = document.getElementsByClassName("img5");
var buyss = document.getElementsByClassName("tieude");




    for(let i = 0; i< buys.length;i++){
        buys[i].style.display = "block";
        buyss[i].style.display = "block";
        
        
        // console.log(buys[i].parentElement.childNodes[7].childNodes[1]);


        buys[i].addEventListener("click",function(){
            document.getElementById("san-pham").classList.remove("none1");
            document.getElementById("new-sp").classList.add("none1");
            document.getElementById("sanpham4").classList.add("none1");
            document.getElementById("sanpham3").classList.add("none1");

            //tensp
            let ten = buys[i].parentElement.childNodes[5].childNodes[0];
            document.getElementById('tensp1').innerText = ten.text

            //lay gia san pham
            let gia = buys[i].parentElement.childNodes[7].childNodes[0];
            document.getElementById('giasp').innerText = gia.textContent

            //lay gia goc sp
            let giagoc = buys[i].parentElement.childNodes[7].childNodes[1];
            document.getElementById("giamgiasp").innerText = giagoc.textContent

            //lay anh sp
            let anh = buys[i].parentElement.childNodes[3].childNodes[0];
            document.getElementById("anhsp").src = anh.src;

            //lay tac gia
            let tacgia = buys[i].parentElement.childNodes[9];
            document.getElementById("nonden1").innerText = tacgia.textContent

            //lay nhaxb sp
            let nxb = buys[i].parentElement.childNodes[11];
            document.getElementById("nonden2").innerText = nxb.textContent

            //lay namxb
            let namxb = buys[i].parentElement.childNodes[13];
            document.getElementById("nonden3").innerText = namxb.textContent

            //lay kich thuoc
            let kith = buys[i].parentElement.childNodes[15];
            document.getElementById("nonden4").innerText = kith.textContent

            //lay noi dung sp
            let noidung = buys[i].parentElement.childNodes[17].childNodes[0]
            document.getElementById("noi-dung").innerText = noidung.textContent

            //lay gia an sp
            let giaan = buys[i].parentElement.childNodes[21];
            document.getElementById("giaanvl").value = giaan.value


        });
        buyss[i].addEventListener("click",function(){
            document.getElementById("san-pham").classList.remove("none1");
        });
}






let soluong = document.getElementById("soluongsp")
let soluongct = soluong.value
// let cong1 = document.getElementById("congsl")
// let tru2 = document.getElementById("trusl")

function render(soluongct){
    soluong.value = soluongct;
};
function tru() {
    if(soluongct>1){
        soluongct--
        render(soluongct);
    }
};

function cong() {
    soluongct++
    render(soluongct);
};


soluong.addEventListener('input',function(){
    soluongct = soluong.value;
    soluongct = parseInt(soluongct);
    soluongct = (isNaN(soluongct) || soluongct == 0)?1:soluongct;
    render(soluongct);
});








//danh gia sp
const starsUL = document.querySelector(".stars");
const output = document.querySelector(".output");
const stars =  document.querySelectorAll(".fa-star");


stars.forEach((star, index) =>{
    star.starValue = (index + 1);
    star.addEventListener("click",starRate);
});

function starRate(e){
    // output.innerHTML = 'You Rated this $(e.target.starValue) stars';
    output.innerHTML = 'Bạn đã đánh giá '+ (e.target.starValue) + ' sao cho sản phẩm!';
    stars.forEach((star,index) =>{
          if(index < e.target.starValue){
            star.classList.add("orange");
          } else {
            star.classList.remove("orange");
          }
    });
}