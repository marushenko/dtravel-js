document.querySelector('.call-back input[type=submit]').addEventListener('click', submitForm);
function submitForm(e) {
  e.preventDefault()
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.querySelector('.call-back').innerHTML = '<h3>We call you back</h3>';
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      document.querySelector('.call-back').innerHTML += 'We do not call you back';
    }
  }
  xhr.open('POST', 'login.php', true);
  const form = document.querySelector('.call-back');
  const data = new FormData(form);
  xhr.send(data);
}