function checkforblank() {

  if (document.getElementById('fname').value == "" && document.getElementById('lname').value == "") {
    document.getElementById('fname').style.borderColor = "red";
    return false;
  }
  if (document.getElementById('lname').value == "") {
    document.getElementById('lname').style.borderColor = "red";
    return false;
  }
  if (document.getElementById('email').value == "") {
    document.getElementById('email').style.borderColor = "red";
    return false;
  }
  if (document.getElementById('email').includes('@')) {
    document.getElementById('email').style.borderColor = "red";
    return false;
  }
  if (document.getElementById('username').value == "") {
    document.getElementById('username').style.borderColor = "red";
    return false;
  }
  if (document.getElementById('password').value == "") {
    document.getElementById('password').style.borderColor = "red";
    return false;
  }
}
