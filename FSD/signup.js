
function validateForm( event ){
  event.preventDefault()

  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var sel = document.getElementById('questionselect').value
  var answer = document.getElementById('answer').value

  if( email.match(mailformat)){
    if( password.match(re) ){
        if( sel == "whatisyourmothername" ){
          if( answer == "abc" ){
            alert("ok")
          }else{
            alert('incorrect answer')
          }
        }
        if( sel == "whatisyourfirstpet" ){
          if( answer == "def" ){
            alert("ok")
          }else{
            alert('incorrect answer')
          }
        }
        if( sel == "whatisyourmobile" ){
          if( answer == "ghi" ){
            alert("ok")
          }else{
            alert('incorrect answer')
          }
        }
    }else{
      alert('at least one number, one lowercase and one uppercase letter, at least six characters')
    }
  }else{
    alert("type a valid email")
  }
}
