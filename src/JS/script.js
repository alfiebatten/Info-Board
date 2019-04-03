document.querySelector('[data-switch-contrast]').addEventListener('click', function() {
  document.body.classList.toggle('nightmode');
});

function checkforblank() {

  if (document.getElementById('username').value == "") {
    document.getElementById('username').style.borderColor = "red";
    return false;
  }
  if (document.getElementById('password').value == "") {
    document.getElementById('password').style.borderColor = "red";
    return false;
  }
}
