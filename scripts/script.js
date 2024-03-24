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