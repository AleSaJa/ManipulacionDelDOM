// By clicking on the button, the font, font size, and color of the paragraph text should change.

function getFormvalue(){
    var form = document.getElementById("form1");
    var inputForm = form.getElementsByTagName("input");
    var fname = inputForm[0].value;
    var lname = inputForm[inputForm.length-1].value;

    console.log(fname +" "+ lname);
}
