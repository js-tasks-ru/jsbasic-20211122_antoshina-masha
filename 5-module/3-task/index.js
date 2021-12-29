function initCarousel() {
  let carousel = document.getElementsByClassName("carousel__slide");
  let carouselInner = document.getElementsByClassName("carousel__inner");
  let allSlides = carouselInner[0]

  let rightButton = document.getElementsByClassName("carousel__arrow_right")[0];
  let leftButton = document.getElementsByClassName("carousel__arrow_left")[0];
  let index = 0;
  let currentImg = carousel[index];
  rightButton.addEventListener('click', rightListener);
  leftButton.addEventListener('click', leftListener);
  leftButton.style.display = 'none';
  let delta = carouselInner[0].offsetWidth

  let initialPXValue = 0;


  function rightListener() {
    index++
    initialPXValue -= delta;
    leftButton.style.display = 'flex'
    if (index > carousel.length - 1 || index == carousel.length - 1) {
      index = carousel.length - 1;
      rightButton.style.display = 'none';
    }
    carouselInner[0].style.transform = "translateX(" + initialPXValue + "px)"

    // currentImg = carousel[index];
    // toggleImg();
  }

  function leftListener() {
    index--
    initialPXValue += delta;
    rightButton.style.display = 'flex'
    if (index < 0 || index == 0) {
      index = 0;
      leftButton.style.display = 'none';
    }
    carouselInner[0].style.transform = "translateX(" + initialPXValue + "px)"
    // currentImg = carousel[index];
    // toggleImg();
  }

  function toggleImg() {
    currentImg.hidden = false;
    let filteredCarousel = Array.prototype.slice.call(carousel).filter(img => img != currentImg);
    filteredCarousel.forEach(img => {
      img.hidden = true;
    });
  }
}
