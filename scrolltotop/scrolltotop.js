let mybutton = document.getElementById("scrollToTopButton");

// Add scroll event to show/hide button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollMargin = 20;

  // If the page is scrolled more than 20px, show the button
  if (
    document.body.scrollTop > scrollMargin ||
    document.documentElement.scrollTop > scrollMargin
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  // Smooth scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
}
