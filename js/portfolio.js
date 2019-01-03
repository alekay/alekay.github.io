document.addEventListener('DOMContentLoaded', function(){

  // navbar toggler
    function classToggle() {
      const navs = document.querySelectorAll('.navbar-items')
      
      navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
    }
  
    document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);
  
  // header changes when scroll and progress bar updates
  window.onscroll = () => {
    headerScroll();
    progressBar();
  };
  
  // set class changes for header effect on scroll
  headerScroll = () =>{
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
      document.getElementById('header box').className = 'headerScroll';
    } else {
      document.getElementById('header box').className = 'header box';
    }
  }
  
  // progress bar (0-100%)
  progressBar = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
  } 
    
});