window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
} // Scroll to the top of the page when the button is clicked 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// $('.filter').click(function() {
//     var category = $(this).data('category');
//     $('.card').each(function() {
//       if (category === 'all' || $(this).hasClass(category)) {
//         $(this).removeClass('hidden');
//       } else {
//         $(this).addClass('hidden');
//       }
//     });
//   });

  $('.filter').click(function() {
    var category = $(this).data('category');
    $('.card').each(function() {
      if (category === 'all' || $(this).hasClass(category)) {
        $(this).parent().removeClass('hidden');
      } else {
        $(this).parent().addClass('hidden');
      }
    });
  });

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nameVal = document.getElementById('name').value;
    const emailVal = document.getElementById('email').value;
    const messageVal = document.getElementById('message').value;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');
    
    if (nameVal.trim() === '' || emailVal.trim() === '' || messageVal.trim() === '') {
      // alert('Please fill out all required fields.');
      event.preventDefault();
      formMessage.innerText = 'Please fill out all required fields.';
      name.style.borderColor = "red";
      email.style.borderColor = "red";
      message.style.borderColor = "red";
    }
    
  });
  
  document.getElementById('contactForm').addEventListener('keyup', function(event) {
    const email = document.getElementById('email');

    const emailVal = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVal.match(emailRegex)) {
      // alert('Please enter a valid email address.');
      formMessage.innerHTML = 'Please enter a valid email address.';
      email.style.borderColor = "red";
      event.preventDefault();
  } else {
    formMessage.innerText = '';
    email.style.borderColor = "#ced4da";
  }

});