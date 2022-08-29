const check = () => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if(name == ""){
        alert("Please fill out all fields!");
    }else if(phone == ""){
        alert("Please fill out all fields!");
    }else if(email == ""){
        alert("Please fill out all fields!");
    }else if(message == ""){
        alert("Please fill out all fields!");
    }else{
        alert(`Thanks ${name}! Sent to Babi :)`);
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
    }