const PUBLIC_KEY = "uX3xpXJ1b5DuWg1IP";
const SERVICE_ID = "service_ragtezv";
const TEMPLATE_ID = "template_qynarz6";

emailjs.init({
    publicKey: PUBLIC_KEY
});

const form = document.getElementById("contact-form");

form.addEventListener("submit" , function(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;
    
    document.getElementById("nameError").textContent="";
    document.getElementById("emailError").textContent="";
    document.getElementById("messageError").textContent="";
    document.getElementById("formStatus").textContent="";

    if(name === ""){
        document.getElementById("nameError").textContent="Please enter your name.";
        valid = false;

    }else if(!/^[A-Za-z ]+$/.test(name)){
        document.getElementById("nameError").textContent="Name can only contain letters and spaces.";
        valid = false;
    }


    if(email === ""){
        document.getElementById("emailError").textContent="Please enter your email.";
        valid = false;

    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById("emailError").textContent="Please enter a valid email address.";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").textContent="Please enter your message.";
        valid = false;

    }else if(message.length < 10){
        document.getElementById("messageError").textContent="Message must be at least 10 characters long.";
        valid = false;
    }
    if(valid){
        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form
        )

        .then(function(){
            document.getElementById("formStatus").style.color = "green";
            document.getElementById("formStatus").style.fontSize = "15px";
            document.getElementById("formStatus").textContent = "✅ Message sent successfully!";
            form.reset();

            document.getElementById("nameError").textContent="";
            document.getElementById("emailError").textContent="";
            document.getElementById("messageError").textContent="";
        })

        .catch(function(){
            document.getElementById("formStatus").style.color = "red";
            document.getElementById("formStatus").style.fontSize = "15px";
            document.getElementById("formStatus").textContent = "❌ Failed to send message. Please try again later.";
        })
    }else{
            document.getElementById("formStatus").style.color = "red";
            document.getElementById("formStatus").style.fontSize = "15px";
            document.getElementById("formStatus").textContent = "❌ Please fix the errors above.";
        }   

});