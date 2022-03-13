/**
 * bài tập 3:  Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
 */


document.getElementById("btnDocSo").onclick = function () {

    //đầu vào: cho người dùng nhập vào n là số có 3 chữ số
    // lấy phần trăm, chục, đơn vị
    var n = document.getElementById("soNguyen").value*1;
    var tram =Math.floor(n/100);
    console.log(tram);
    var chuc = Math.floor((n/10)%10);
    console.log(chuc);
    var donVi =  n%10;
    console.log(donVi);
    var kQ1;
    var kQ2;
    var kQ3;
    var kQ4;

    //xử lý: switch case gán kQ1, kQ2, kQ3, kQ4 

    switch (tram) {
        case 1:kQ1 = "một trăm";break;
        case 2:kQ1 = "hai trăm";break;
        case 3:kQ1 = "ba trăm";break;
        case 4:kQ1 = "bốn trăm";break;
        case 5:kQ1 = "năm trăm";break;
        case 6:kQ1 = "sáu trăm";break;
        case 7:kQ1 = "bảy trăm";break;
        case 8:kQ1 = "tám trăm";break;
        case 9:kQ1 = "chín trăm";break;

    }

    if(chuc % 10==0 && donVi !=0){
        kQ2 = " lẻ ";
    } else{
        kQ2="";
    }

    switch (chuc) {
        case 0: kQ3 = "";break;
        case 1: kQ3 = " mười ";break;
        case 2: kQ3 = " hai mươi ";break;
        case 3: kQ3 = " ba mươi ";break;
        case 4: kQ3 = " bốn mươi ";break;
        case 5: kQ3 = " năm mươi ";break;
        case 6: kQ3 = " sáu mươi ";break;
        case 7: kQ3 = " bảy mươi ";break;
        case 8: kQ3 = " tám mươi ";break;
        case 9: kQ3 = " chín mươi ";break;
    }

    switch (donVi) {
        case 1:kQ4 = "một ";break;
        case 2:kQ4 = "hai ";break;
        case 3:kQ4 = "ba ";break;
        case 4:kQ4 = "bốn ";break;
        case 5:kQ4 = "năm ";break;
        case 6:kQ4 = "sáu ";break;
        case 7:kQ4 = "bảy ";break;
        case 8:kQ4 = "tám ";break;
        case 9:kQ4 = "chín ";break;
    }

    //đầu ra: xuất cách đọc ra màn hình

    var docSo = kQ1 +""+ kQ2 +""+ kQ3 +""+ kQ4;
    document.getElementById("ketQua").innerHTML=docSo;

}

/**
 * bài tập 2: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng
của năm nhuận).
 */

document.getElementById("btnTinhNgay").onclick = function () {
    var Th=document.getElementById("thang").value*1;
    var Na=document.getElementById("nam").value*1;

///năm ko nhuận
if (Na%4>0){
switch (Th) {
    case 1: day = "31 ngày";break;
    case 2: day = " 28 ngày ";break;
    case 3: day = " 31 ngày ";break;
    case 4: day = " 30 ngày";break;
    case 5: day = " 31 ngày ";break;
    case 6: day = " 30 mươi ";break;
    case 7: day = " 31 ngày ";break;
    case 8: day = " 31 ngày ";break;
    case 9: day = " 30 ngày ";break;
    case 10: day = " 31 ngày ";break;
    case 11: day = " 30 ngày ";break;
    case 12: day = " 31 ngày ";break;
}
}else{
    //năm nhuận
    switch (Th) {
        case 1: day = "31 ngày";break;
        case 2: day = " 29 ngày ";break;
        case 3: day = " 31 ngày ";break;
        case 4: day = " 30 ngày";break;
        case 5: day = " 31 ngày ";break;
        case 6: day = " 30 mươi ";break;
        case 7: day = " 31 ngày ";break;
        case 8: day = " 31 ngày ";break;
        case 9: day = " 30 ngày ";break;
        case 10: day = " 31 ngày ";break;
        case 11: day = " 30 ngày ";break;
        case 12: day = " 31 ngày ";break;

}

}
var soNgay = "số ngày của tháng là: " + day;
    document.getElementById("ketQuaTinh").innerHTML=soNgay;

}


/**
 * bài tập 1: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
 */

document.getElementById("btnTimNgay").onclick = function () {
    var NG=document.getElementById("Ngay").value*1;
    var TH=document.getElementById("Thang").value*1;
    var NA=document.getElementById("Nam").value*1;

}
   
