function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_tbeowy5", "template_sx6ywon", params).then(function (res) {
        alert("success!" + res.status);
    })
}