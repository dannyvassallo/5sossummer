function validateForm() {
    var frstNm = document.forms["ss-form"]["entry.2080480129"].value;
    var lstNm = document.forms["ss-form"]["entry.471668626"].value;
    var eMail = document.forms["ss-form"]["entry.193196971"].value;
    var bDay = document.forms["ss-form"]["entry.1845520799"].value;

    //For Email Validation
    var atpos = eMail.indexOf("@");
    var dotpos = eMail.lastIndexOf(".");

//First Name
    if (frstNm == null || frstNm == "") {
        alertify.error("First name must be filled out!");
        $('#entry_2080480129').addClass('error');
        return false;
    }
//Last Name
    else if (lstNm == null || lstNm == "") {
        alertify.error("Last name must be filled out!");
        $('#entry_471668626').addClass('error');
        return false;
    }
//Email
    else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=eMail.length) {
        alertify.error("Please enter a valid email address.");
        $('#entry_193196971').addClass('error');
        return false;
    }
//Bday
    else if ( bDay.length == 0) {
        alertify.error("Please enter a valid date of birth.");
        $('#entry_1845520799').addClass('error');
        return false;
    }
    else{
        submitted=true;
    }
}

//Error Red Glow OFF
$(function(){
    $('#entry_2080480129').keyup(function(){
        $(this).removeClass('error');
    });
    $('#entry_471668626').keyup(function(){
        $(this).removeClass('error');
    });
    $('#entry_193196971').keyup(function(){
        $(this).removeClass('error');
    });
    $('#entry_1845520799').keyup(function(){
        $(this).removeClass('error');
    });
});

//No Spaces

//Add - onkeyup="nospaces(this)" to input fields

function nospaces(t){
    if(t.value.match(/\s/g)){
    alertify.error('Sorry, no spaces allowed!');
    t.value=t.value.replace(/\s/g,'');
    }
}
