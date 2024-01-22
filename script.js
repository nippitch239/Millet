let totalPages;
let currentPage = 1;

function handleKeyPress(event) {
  if (event.key === "ArrowRight") {
    nextPage();
  } else if (event.key === "ArrowLeft") {
    prevPage();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
}

function updatePage() {
  const transformValue = `translateX(-${(currentPage - 1) * 100}%)`;
  document.body.style.transform = transformValue;
}

document.addEventListener("DOMContentLoaded", function () {
  totalPages = document.querySelectorAll(".page").length;

  document.addEventListener("keydown", handleKeyPress);
});

// Disable scroll events on touch devices
function preventDefaultScroll(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
}

// Add touchmove event listener
document.addEventListener('touchmove', preventDefaultScroll, { passive: false });

// Disable scrolling by setting overflow to hidden
document.body.style.overflow = 'hidden';

// Enable scrolling by setting overflow to auto
// Uncomment the line below if you want to enable scrolling at some point
// document.body.style.overflow = 'auto';
