var btnSubmit = document.forms['register-box']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateData()) {
        document.forms['register-box'].style.display = 'none';
        var content = '';
        content += '<div>';
        content += '<div>Name: ' + document.forms['register-box']['fullName'].value + '</div>';
        content += '<div>Email: ' + document.forms['register-box']['email'].value + '</div>';
        content += '<div>Phone: ' + document.forms['register-box']['phone'].value + '</div>';
        if (document.forms['register-box']['gender'].value == 1){
            content += '<div>Gender: Males</div>';
        }
        if (document.forms['register-box']['gender'].value == 0){
            content += '<div>Gender: Females</div>';
        }
        if (document.forms['register-box']['gender'].value == 2){
            content += '<div>Gender: Other</div>';
        }
        content += '<div> Hobbies: ';
        if (document.forms['register-box']['hobbies1'].checked == true) {
            content += '<div>Sports</div>';
        }
        if (document.forms['register-box']['hobbies2'].checked == true) {
            content += '<div>Movies</div>';
        }
        if (document.forms['register-box']['hobbies2'].checked == true) {
            content += '<div>Reading</div>';
        }
        if (document.forms['register-box']['hobbies2'].checked == true) {
            content += '<div>Music</div>';
        }
        if (document.forms['register-box']['hobbies2'].checked == true) {
            content += '<div>Others</div>';
        }
        content += '<div>Introduction: ' + document.forms['register-box']['introduction'].value + '</div>';
    }
    document.getElementById('new-content').innerHTML += content;
    document.getElementById('footer-student-name').innerHTML += document.forms['register-box']['fullName'].value +', ';
    document.getElementById('footer-student-email').innerHTML += document.forms['register-box']['fullName'].value + ', ';
    document.getElementById('footer-student-class').innerHTML += 'Lop hoc hien tai';

};


validateData();

function validateData() {
    var txtFullName = document.forms['register-box']['fullName'];
    var txtEmail = document.forms['register-box']['email'];
    var txtPhone = document.forms['register-box']['phone'];
    var txtGender = document.forms['register-box']['gender'];
    var txtHobbies1 = document.forms['register-box']['hobbies1'];
    var txtHobbies2 = document.forms['register-box']['hobbies2'];
    var txtHobbies3 = document.forms['register-box']['hobbies3'];
    var txtIntroduction = document.forms['register-box']['introduction'];

    var msgFullName = txtFullName.nextElementSibling;
    var msgEmail = txtEmail.nextElementSibling;
    var msgPhone = txtPhone.nextElementSibling;
    var msgGender = txtGender.nextElementSibling;

    var isValid = true;
    var isValidFullName = true;
    var isValidPhone = true;
    var isValidGender = true;
    var isValidEmail = true;

    if (txtFullName.value == null || txtFullName.value.length == 0) {
        msgFullName.classList.remove('msg-success');
        msgFullName.classList.add('msg-error');
        msgFullName.innerHTML = 'First name can\'t be null or empty.';
        isValidFullName = false;
    } else {
        msgFullName.classList.remove('msg-error');
        msgFullName.classList.add('msg-success');
        msgFullName.innerHTML = 'Valid.';
    }
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Telephone number can\'t be null or empty.';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Valid.';
    }
    if (txtGender.value == 5) {
        msgGender.classList.remove('msg-success');
        msgGender.classList.add('msg-error');
        msgGender.innerHTML = 'Gender can\'t be skipped.';
        isValidGender = false;
    } else {
        msgGender.classList.remove('msg-error');
        msgGender.classList.add('msg-success');
        msgGender.innerHTML = 'Valid.';
    }
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email can\'t be null or empty.';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Valid.';
    }
    isValid = isValidFullName && isValidPhone && isValidGender && isValidEmail;
    return isValid;
}