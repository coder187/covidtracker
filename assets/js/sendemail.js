//https://www.emailjs.com/

function sendMail(contactForm) {
    //console.log("send mail started");

    emailjs.send("service_9qp215l", "template_g0m71kp", {

        fname: contactForm.first_name.value,
        from_name: contactForm.first_name.value + " " + contactForm.last_name.value,
        from_email: contactForm.email_address.value
    })
        .then(
            function (response) {
                location.replace("conf.html");
            },
            function (error) {
                location.replace("fail.html");
            }
        );
    return false;  // To block from loading a new page
}
