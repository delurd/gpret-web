const Home = () => {
  // HOME SCROLL
  const home = document.querySelector('#home');
  const body = document.querySelector('body');
  const contentCard = document.querySelector('#home .content-card');
  const backTitle = document.querySelector('#home .back-title');
  const homeTitle = document.querySelector('#home .title');
  const star = document.querySelector('.star');
  const char = document.querySelector('.char');
  const circle2 = document.querySelector('.char .c-2');

  // gsap.from(contentCard, { y: "100%", duration: 1, ease: "power3.out" })

  const onUpAction = () => {
    // gsap.to(contentCard, 1, {
    //     y: "-60vh",
    //     ease: CustomEase.create("custom", "M0,0 C0.031,0.971 0.429,0.989 1,1 "),
    //     overwrite: true,
    // })
    // gsap.to(char, 1.5, {
    //     // y: "50px",
    //     filter: "grayscale(0%)",
    //     // ease: "power3.out",
    //     overwrite: true,
    // })
    // gsap.to(homeTitle, 1.5, {
    //     y: "-20vh",
    //     ease: "power4.out",
    //     overwrite: true,
    // })
    // gsap.to(backTitle, 2, {
    //     y: "-20vh",
    //     // x: "-50%",
    //     ease: "power4.out",
    //     overwrite: true,
    // })
    contentCard.style = 'transform: translate(-50%, -60dvh)';
    backTitle.style = 'transform: translate(-50%, -20vh)';
    homeTitle.style = 'transform: translate(-50%, -20vh)';
    char.style = 'filter: grayscale(0%); transform: translate(-50%, 50px)';
    circle2.style = 'transform: translate(-50%, -20px)';
    star.classList.add('up');
  };

  const onDownAction = () => {
    // gsap.to(contentCard, 1, {
    //     y: 0,
    //     ease: CustomEase.create("custom", "M0,0 C0.031,0.971 0.429,0.989 1,1 "),
    //     overwrite: true,
    //     onComplete: () => { contentCard.style = "" }
    // })
    // gsap.to(char, 1.5, {
    //     // y: 0,
    //     filter: "grayscale(100%)",
    //     // ease: "power3.out",
    //     overwrite: true,
    //     onComplete: () => { char.style = "" }
    // })
    // gsap.to(homeTitle, 1.5, {
    //     y: 0,
    //     ease: "power4.out",
    //     overwrite: true,
    // })
    // gsap.to(backTitle, 2, {
    //     y: 0,
    //     // x: "-50%",
    //     ease: "power4.out",
    //     overwrite: true,
    // })
    contentCard.style = '';
    backTitle.style = '';
    homeTitle.style = '';
    char.style = '';
    circle2.style = '';
    star.classList.remove('up');
  };

  body.addEventListener('keyup', (e) => {
    // console.log(e);
    if (e.key == 'ArrowDown') onUpAction();
    if (e.key == 'ArrowUp') onDownAction();
  });

  home.addEventListener('wheel', (e) => {
    // console.log(e.deltaY);
    if (e.deltaY > 10) onUpAction();
    if (e.deltaY < -10) onDownAction();
  });

  const onPointerMove = (e) => {
    if (e.movementY > 1) onDownAction();
    if (e.movementY < -1) onUpAction();
  };

  home.addEventListener('touchstart', () => {
    home.addEventListener('pointermove', onPointerMove, true);
  });

  home.addEventListener('touchend', () => {
    home.removeEventListener('pointermove', onPointerMove, true);
  });

  ////
  const focusRect = document.querySelector('.focus-rect');
  home.addEventListener('mousemove', (e) => {
    focusRect.style = `transform : translate(${
      (e.clientX / window.innerWidth) * 100
    }px , ${(e.clientY / window.innerHeight) * 100}px)`;
    // gsap.to(".focus-rect", {
    //   x: (e.clientX / window.innerWidth) * 100,
    //   y: (e.clientY / window.innerHeight) * 100,
    //   duration: 3,
    //   ease: "power4.out"
    // })
    // cursor.style = `transform: translate(${e.clientX-20}px, ${e.clientY-20}px)`
  });
};

export default Home;
