const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let question = document.getElementById('question').value.trim();

  if(name === '' || email === '' || question === ''){
    alert('Please fill all required fields!');
    return;
  }

  alert('Thank you! Your question has been submitted.');
  form.reset();
});