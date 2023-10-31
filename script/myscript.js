/*--- 카드 크기 조절 ---*/
const section7 = document.getElementById('section7');

function scaleSide() {
  const side = document.querySelectorAll('.cardbox-side');
  const back = document.querySelectorAll('.cardbox-back');
  const backWidth = back[0].offsetWidth;
  const backHeight = back[0].offsetHeight;
  if (backWidth == 0) {
    setTimeout(scaleSide, 300);
  } else {
    for (let i = 0; side[i]; i += 2) {
      side[i].style.height = `${backHeight + 1}px`;
      side[i + 1].style.height = `${backHeight + 1}px`;
      side[i].style.transform = `translateZ(${
        side[0].offsetWidth / 2
      }px) translateX(${backWidth / 2}px) rotateY(90deg)`;
      side[i + 1].style.transform = `translateZ(${
        side[0].offsetWidth / 2
      }px) translateX(${(backWidth / 2) * -1}px) rotateY(90deg)`;
    }
    back.forEach((element) => {
      element.style.transform = `translateZ(${side[0].offsetWidth}px) rotateY(0deg)`;
    });
  }
}

const observer = new ResizeObserver((entries) => {
  for (let entry of entries) {
    scaleSide();
  }
});

observer.observe(section7);
