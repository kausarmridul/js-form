var fname = document.getElementById('fname');
var fnameLab = document.getElementById('fnameLab');
var fnamErr = document.getElementById('fnamErr');
var email = document.getElementById('email');
var emailLab = document.getElementById('emailLab');
var emailErr = document.getElementById('emailErr');
var phoneNum = document.getElementById('phoneNum');
var phoneLab = document.getElementById('phoneLab');
var phoneNumErr = document.getElementById('phoneNumErr');
var batchNum = document.getElementById('batchNum');
var batchLab = document.getElementById('batchLab');
var batchNumErr = document.getElementById('batchNumErr');
var idNum = document.getElementById('idNum');
var idNumLab = document.getElementById('idNumLab');
var idNumErr = document.getElementById('idNumErr');
var messege = document.getElementById('messege');
var messegeLab = document.getElementById('messegeLab');
var messegeErr = document.getElementById('messegeErr');

var form = document.getElementById('form');
var show = document.getElementById('show');
var close = document.getElementById('close');




function onSub() {

    if (fname.value == "") {
        fnamErr.style.display = "inline-block";
        fname.focus();
        return false;
    } else {
        fnamErr.style.display = "none";
    };

    if (email.value == "") {
        emailErr.style.display = "inline-block";
        email.focus();
        return false;
    } else {
        emailErr.style.display = "none";
    };
    if (phoneNum.value == "") {
        phoneNumErr.style.display = "inline-block";
        phoneNum.focus();
        return false;
    } else {
        phoneNumErr.style.display = "none";
    };

    if (batchNum.value == "") {
        batchNumErr.style.display = "inline-block";
        batchNum.focus();
        return false;
    } else {
        batchNumErr.style.display = "none";
    };

    if (idNum.value == "") {
        idNumErr.style.display = "inline-block";
        idNum.focus();
        return false;
    } else {
        idNumErr.style.display = "none";
    };

    if (messege.value == "") {
        messegeErr.style.display = "inline-block";
        messege.focus();
        return false;
    } else {
        messegeErr.style.display = "none";
    };


}

fname.addEventListener("focus", function () {
    if (fname.focus) {
        fnameLab.style.top = "-7px";
    }
})
fname.addEventListener("blur", function () {
    if (fname.value == "") {
        fnameLab.style.top = "13px";
    }
})

email.addEventListener("focus", function () {
    if (email.focus) {
        emailLab.style.top = "-7px";
    }
})
email.addEventListener("blur", function () {
    if (email.value == "") {
        emailLab.style.top = "13px";
    }
})

phoneNum.addEventListener("focus", function () {
    if (phoneNum.focus) {
        phoneLab.style.top = "-7px";
    }
})
phoneNum.addEventListener("blur", function () {
    if (phoneNum.value == "") {
        phoneLab.style.top = "13px";
    }
})

batchNum.addEventListener("focus", function () {
    if (batchNum.focus) {
        batchLab.style.top = "-7px";
    }
})
batchNum.addEventListener("blur", function () {
    if (batchNum.value == "") {
        batchLab.style.top = "13px";
    }
})

idNum.addEventListener("focus", function () {
    if (idNum.focus) {
        idNumLab.style.top = "-7px";
    }
})
idNum.addEventListener("blur", function () {
    if (idNum.value == "") {
        idNumLab.style.top = "13px";
    }
})

messege.addEventListener("focus", function () {
    if (messege.focus) {
        messegeLab.style.top = "-7px";
    }
})
messege.addEventListener("blur", function () {
    if (messege.value == "") {
        messegeLab.style.top = "13px";
    }
})


close.addEventListener('click', function () {
    form.style.display = "none";
    show.style.display = "block";
})

show.addEventListener('click', function () {
    form.style.display = "block";
    show.style.display = "none";
})