document.addEventListener("DOMContentLoaded", function() {
  const dragons = document.querySelectorAll(".dragon");
  
  dragons.forEach((dragon, index) => {
    dragon.style.opacity = 0;
    dragon.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
      dragon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      dragon.style.opacity = 1;
      dragon.style.transform = 'translateY(0)';
    }, index * 200);
  });
});
