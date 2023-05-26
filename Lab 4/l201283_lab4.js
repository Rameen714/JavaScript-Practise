window.onload = alert("Welcome to Home Page");

function validate()
{
    if(document.getElementById('fn').value == "")
    {
        alert('First Name field cannot be empty.');
        return false;
    }
    if(document.getElementById('un').value == "")
    {
        alert('User Name field cannot be empty.');
        return false;
    }
    if(document.getElementById('email').value == "")
    {
        alert('Email field cannot be empty.');
        return false;
    }
    if(document.getElementById('ph_no').value == "")
    {
        alert('Phone No field cannot be empty.');
        return false;
    }
    if(document.getElementById('pass').value == "")
    {
        alert('Password field cannot be empty.');
        return false;
    }
    if(document.getElementById('c_pass').value == "")
    {
        alert('Confirm Password field cannot be empty.');
        return false;
    }
    if( document.getElementById("dot-1").checked == false &&  document.getElementById("dot-2").checked == false &&  document.getElementById("dot-3").checked == false)
    {
        alert('Gender field cannot be empty.');
        return false;
    }

    return submit();
}
function changeColor(obj)
{
    if(typeof obj == String)
        obj = document.getElementById(obj);
    obj.style.backgroundColor='lightblue';
}
function blurColor(obj)
{
    if(typeof obj == String)
        obj = document.getElementById(obj);
    obj.style.backgroundColor='';
}
function submit()
{
    alert("Thank You! Your request has been submitted.");
    return true;
}