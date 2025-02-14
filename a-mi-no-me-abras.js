document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  const date = new Date();
  const currentYear = date.getFullYear();
  yearElement.textContent = currentYear;

  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close');  

  yesBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  noBtn.addEventListener('mouseover', repositionNoBtn);
  noBtn.addEventListener('click', repositionNoBtn);
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  function repositionNoBtn() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = containerRect.width - btnWidth;
    const maxY = containerRect.height - btnHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
  }
});
