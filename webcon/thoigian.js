function timeWorld(){
            
        let ThoiGian = new Date();
        let gio = ThoiGian.getHours();
        let phut = ThoiGian.getMinutes();
        let giay = ThoiGian.getSeconds();
        let ngay = ThoiGian.getDate();
        let thang = ThoiGian.getMonth() + 1;
        let nam = ThoiGian.getFullYear()
        document.getElementById('tg').innerHTML = "NGÀY "+ ngay + " THÁNG " + thang + " NĂM " + nam + "<br>"+gio + ":" + phut + ":" + giay;
        

 
        }

        var load2 = setInterval(timeWorld, 1000); 
