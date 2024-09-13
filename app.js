// Function to close nav-bar
function closeNavBar() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("active");
  }
  
  // Function to handle scroll event
  function handleScroll() {
    // Close the nav-bar when user scrolls
    closeNavBar();
    // Remove the scroll event listener after the nav-bar is closed
    window.removeEventListener("scroll", handleScroll);
  }
  
  function handleNavBar() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active"); // Toggle the 'active' class
  
    if (navMenu.classList.contains("active")) {
      // If nav-bar is open, add scroll event listener to close it on scroll
      window.addEventListener("scroll", handleScroll);
    }
  }