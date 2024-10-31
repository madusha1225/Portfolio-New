// send Email Script
function SendMail() {
    var params = {
        // from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("emailAddress").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_zxqpepv", "template_k0hn7c7", params).then(function (res) {
        alert("Success! " + res.status);
    });
}
