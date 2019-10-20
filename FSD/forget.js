
function validateForm( event ){
  event.preventDefault()


  var email = document.getElementById('email').value

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


  if( email.match(mailformat)){
    alert("Reset password Email send")
  }
  else
  {
    alert("type a valid email")
  }
}
