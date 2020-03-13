let contentPosition = document.getElementById("content").offsetTop;
let sidebar = document.getElementById("sidebar");
let sidebarHeight = sidebar.offsetHeight;
let footerPosition = document.getElementById("footer").offsetTop;

let maxPosition = footerPosition - sidebarHeight;

function init() {
  if(window.scrollY >= contentPosition ) {
    sidebar.className = "active";
    if (window.scrollY > maxPosition) {
      sidebar.className = "";
    }
  }
  else {
    sidebar.className = "";
  }
}
init();
window.onscroll = function() {init()};
