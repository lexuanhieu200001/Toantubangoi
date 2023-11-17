//bai1 Nhập vào giá trị cho a và b. Tính tổng a và b, nếu tổng nhỏ hơn 4, hiển thị chuỗi Below, ngược lại hiển thị Over
/*let a = +prompt('Nhap a');
let b = +prompt('Nhap b');
if((a+b)<4) {
    alert('Below');
} else {
    alert('Over')
}*/
//cach 1
/*let a = +prompt('Nhap a');
let b = +prompt('Nhap b');
let result = ((a+b)<4)?alert('bello'):alert('over');*/
//cach 2 : toan tu 3 ngoi
/*let a = +prompt('Nhap a');
let b = +prompt('Nhap b');
result = (a+b)<4?'bello':'over';
document.write(result);*/


//bai2
/*let login = prompt('moi ban nhap')
let message;
if (login == "Employee") {
    document.write('hello');
    } else if (login == "Director") {
    document.write('Greetings');
    } else if (login == "") {
    document.write('No login');
} else {
    document.write('')
}*/
//cach 2: toan tu 3 ngoi
let login = prompt('moi ban nhap')
let message = (login == 'Employee')?
    'hello' :
    (login == 'Director')?
        'Greetings':
        (login == '')?
            'no login': '';
alert(message);