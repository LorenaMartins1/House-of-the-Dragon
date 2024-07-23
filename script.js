document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.list .itens');
  const indicators = document.querySelectorAll('.indicators ul li');
  const numberDisplay = document.querySelector('.indicators .number');
  let currentIndex = 0;

  const updateDisplay = (index) => {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    numberDisplay.textContent = `0${index + 1}`;
  };

  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateDisplay(currentIndex);
  });

  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateDisplay(currentIndex);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateDisplay(currentIndex);
    });
  });
});

// script.js


