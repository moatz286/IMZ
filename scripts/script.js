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
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all required fields.');
        event.preventDefault();
    }

    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});