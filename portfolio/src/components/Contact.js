import React from "react";
import emailjs from "emailjs-com"
import '../styles/contact.css'




function Contact() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_fle5mca', 'template_8hq1hwi', e.target, 'lo9Df5tOQo6XoBRtg')
            .then((result) => {
                alert('Email succesfully sent!')
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    function validateEmail(email) {
        var regex = /^[^\s@]+@mit\.edu$/;
        var result = regex.test(email);
        if (result === true) {
        }
        else {
            console.log("Enter correct email address!")
        }
    }

    return (
            <div className="container" id='contact'>
                <div className="titleCard">
                    <h3>Contact</h3>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <label>Name: </label>
                    <input type="text" name="from_name" /><br />
                    <label>Email: </label>
                    <input type="email" name="from_email" onChange={validateEmail} /><br />
                    <label>Subject: </label>
                    <input type="text" name="subject" /><br />
                    <label>Message: </label>
                    <textarea className="messageText" name="html_message" /><br />
                    <input type="submit" value="Send" />
                </form>
            </div>
    )
}

export default Contact