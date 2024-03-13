function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "meenusarika123@gmail.com",
        Password : "1234@8765",
        To : 'meenusarika123@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}