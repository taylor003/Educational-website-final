function emailSend(){

 var userName = document.getElementById('name').value;
 var phone = document.getElementById('phone').value;  
 var email = document.getElementById('eamil').value;

 var messagedBody = "Name" + userName + "<br/> Phone " + phone +
 "<br/> Email " + email;

 Email.send({
    Host : "smtp.elasticemail.com",
    Username : "joshuachabe02@gmail.com",
    Password : "A120C7F4F2977B173A852E824B0850B6E207",
    To : 'joshuacarter003@gmail.com',
    From : "joshuachabe02@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}