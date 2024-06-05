const Contact = () => {
  const card = document.querySelector('.card');
  const cardPlace = document.querySelector('.card');

  gsap.to(card, 2, {
    ease: 'power4.out',
    rotationX: 2,
    transformPerspective: 800,
    overwrite: true,
  });

  window.addEventListener('mousemove', async (e) => {
    // USED
    const cardWidth = card.scrollWidth;
    const cardHeight = card.scrollHeight;
    const mousePosX = e.clientX;
    const mousePosY = e.clientY;
    const maxDeg = 10;

    var viewportOffset = card.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var cardWindowTop = viewportOffset.top;
    var cardWindowLeft = viewportOffset.left;
    let cursorPosX = mousePosX - Math.round(cardWindowLeft) - cardWidth / 2;
    let cursorPosY = mousePosY - Math.round(cardWindowTop) - cardHeight / 2;

    if (cursorPosX > cardWidth / 4) {
      cursorPosX = cardWidth / 4;
    }
    if (cursorPosX < -cardWidth / 4) {
      cursorPosX = -cardWidth / 4;
    }
    if (cursorPosY > cardHeight / 4) {
      cursorPosY = cardHeight / 4;
    }
    if (cursorPosY < -cardHeight / 4) {
      cursorPosY = -cardHeight / 4;
    }

    const normalisasiX = (Math.abs(cursorPosX) / (cardWidth / 2)) * maxDeg;
    const normalisasiY = (Math.abs(cursorPosY) / (cardHeight / 2)) * maxDeg;

    const deg = Math.round((normalisasiX + normalisasiY) / 2);

    gsap.to(card, 2, {
      ease: 'power4.out',
      rotationY: cursorPosX / 100,
      rotationX: -(cursorPosY / 40),
      transformPerspective: 800,
      overwrite: true,
    });
  });
};

export default Contact;
