var name_input = document.getElementById("name"),
    email_input = document.getElementById("email"),
    message_input = document.getElementById("message");

var name_error_ouput = document.getElementById("name_error"),
    email_error_output = document.getElementById("email_error"),
    message_error_ouput = document.getElementById("message_error");

document.getElementById("submit-btn").addEventListener("click", function(event) {
    var valid = true;

    if(name_input.value.trim() === ""){
        name_error_ouput.textContent = " Name Cannot Be Empty!";
        valid = false;
    }
    else{
        name_error_ouput.textContent = "";
    }
    if(email_input.value.trim() === ""){
        email_error_output.textContent = " Email Cannot Be Empty!";
        valid = false;
    }
    else{
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email_input.value)) {
            email_error_output.textContent = "Invalid email address!";
            valid = false;
        }
        else{
            email_error_output.textContent = "";
        }
    }
    if(message_input.value.trim() === ""){
        message_error_ouput.textContent = " Message Cannot Be Empty!";
        valid = false;
    }
    else{
        message_error_ouput.textContent = "";
    }

    if(valid){
        alert("Thank you for your message!");
    }
    else{
        event.preventDefault();
    }
});