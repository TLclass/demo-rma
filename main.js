document.querySelector('#submit_form').onsubmit = function(e) {
    e.preventDefault();

    let msgOj = document.querySelector('.msg');

    let fullNameOj = document.querySelector('input[name="hoTen"]');
    let classOj = document.querySelector('input[name="lopHoc"]');
    let emailOj = document.querySelector('input[name="email"]');
    let phoneOj = document.querySelector('input[name="soDienThoai"]');

    let fullName = fullNameOj.value;
    let classname = classOj.value;
    let email = emailOj.value;
    let phone = phoneOj.value;

    let data = {
        'entry.1476234119': fullName,
        'entry.264518076': classname,
        'entry.1520167146': email,
        'entry.1529149578': phone
    }

    console.log(fullName);
    if (fullName.trim() != '' && classname.trim() != '' && email.trim() != '' && phone.trim() != '') {
        let queryString = new URLSearchParams(data);
        queryString = queryString.toString();
        //console.log(queryString);
        msgOj.innerHTML = '<div class="alert alert-success text-center"> Đang xử lý... </div>'
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScG5jeN9WJ6EH7893AkTj7H_rzH1_zYUI4L0JQFqQvB65DTxQ/formResponse', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        msgOj.innerHTML = '<div class="alert alert-success text-center"> Gửi dữ liệu thành công </div>'
        xhr.send(queryString);
        fullNameOj.value = '';
        classOj.value = '';
        emailOj.value = '';
        phoneOj.value = '';
    }
    else {
        msgOj.innerHTML = '<div class="alert alert-danger text-center"> Hãy thử nhập lại </div>'
    }
}

var bar2 = document.querySelector("#bar2");
var bartab = document.querySelector("#bartab");
var check = 0;
function opentab() {
    if (check == 0) {
        bar2.style.display = "block";
        check++;
        bartab.innerHTML = '<i class="fa-solid fa-rectangle-xmark"></i>';
    }
    else {
        bar2.style.display = "none";
        check = 0;
        bartab.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
    }
}