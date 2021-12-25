function initCarousel() {
  let carousel = document.getElementsByClassName("carousel__slide");
  let rightButton = document.getElementsByClassName("carousel__arrow_right")[0];
  let leftButton = document.getElementsByClassName("carousel__arrow_left")[0];
  let index = 0;
  let currentImg = carousel[index];
  rightButton.addEventListener('click', rightListener);
  leftButton.addEventListener('click', leftListener);
  leftButton.style.display = 'none';

  function rightListener() {
    index++
    leftButton.style.display = 'flex'
    if (index > carousel.length - 1 || index == carousel.length - 1) {
      index = carousel.length - 1;
      rightButton.style.display = 'none';
    }

    currentImg = carousel[index];
    toggleImg();
  }

  function leftListener() {
    index--
    rightButton.style.display = 'flex'
    if (index < 0 || index == 0) {
      index = 0;
      leftButton.style.display = 'none';
    }
    currentImg = carousel[index];
    toggleImg();
  }

  function toggleImg() {
    currentImg.hidden = false;
    let filteredCarousel = Array.prototype.slice.call(carousel).filter(img => img != currentImg);
    filteredCarousel.forEach(img => {
      img.hidden = true;
    });
  }
}
