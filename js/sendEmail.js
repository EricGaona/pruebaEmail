function sendMail(contactForm) {
    emailjs.send("gmail", "eric", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);  
            document.getElementById("success").style.display = "block" ;           
            document.getElementById("success").innerHTML = "<strong>Thanks. Your email has been sent successfully.</strong>";

        },
        function (error) {
            console.log("FAILED", error);
            document.getElementById("success").style.display = "block" ;
            document.getElementById("fail").innerHTML = "<strong>Sorry. There is an issue, try it again.</strong>";

        }
    );
    return false;  // To block from loading a new page
}