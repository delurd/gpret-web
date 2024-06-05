const Activity = () => {
  const itemsContentActivity = document.querySelectorAll('.ac-content');

  itemsContentActivity.forEach((item) => {
    const divStar = document.createElement('div');

    divStar.classList.add('ac-acs', 'star');
    divStar.innerHTML = `<div>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          </div>`;

    item.append(divStar);
  });

  const linkButtons = document.querySelectorAll('#activity .ac-btn');
  linkButtons.forEach((item) => {
    const btnBg = item.querySelector('.ac-btn-bg');

    item.addEventListener('mouseover', (e) => {
      const itemWidth = item.clientWidth / 2;
      const posX = e.offsetX - itemWidth;

      const itemHeight = item.clientHeight / 2;
      const posY = e.offsetY - itemHeight;

      gsap.to(btnBg, 2, {
        x: posX / 5,
        y: posY / 2,
        height: '130px',
        top: '-20px',
        ease: 'power4.out',
      });
      gsap.to(item, 2, {
        x: posX / 2.5,
        y: posY,
        ease: 'power4.out',
      });
    });

    item.addEventListener('mousemove', (e) => {
      const itemWidth = item.clientWidth / 2;
      const posX = e.offsetX - itemWidth;

      const itemHeight = item.clientHeight / 2;
      const posY = e.offsetY - itemHeight;

      gsap.to(btnBg, 2, {
        x: posX / 5,
        y: posY / 2,
        ease: 'power4.out',
      });
      gsap.to(item, 2, {
        x: posX / 2.5,
        y: posY,
        ease: 'power4.out',
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(btnBg, 1, {
        x: 0,
        y: 0,
        height: 90,
        top: 0,
        ease: 'power2.out',
        overwrite: true,
        onComplete: () => {
          btnBg.style = '';
        },
      });
      gsap.to(item, 0.5, {
        x: 0,
        y: 0,
        ease: 'power4.out',
        overwrite: true,
        onComplete: () => {
          item.style = '';
        },
      });
    });
  });
};

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

  const onUpAction = () => {
    contentCard.style = 'transform: translate(-50%, -60dvh)';
    backTitle.style = 'transform: translate(-50%, -20vh)';
    homeTitle.style = 'transform: translate(-50%, -20vh)';
    char.style = 'filter: grayscale(0%); transform: translate(-50%, 50px)';
    circle2.style = 'transform: translate(-50%, -20px)';
    star.classList.add('up');
  };

  const onDownAction = () => {
    contentCard.style = '';
    backTitle.style = '';
    homeTitle.style = '';
    char.style = '';
    circle2.style = '';
    star.classList.remove('up');
  };

  body.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowDown') onUpAction();
    if (e.key == 'ArrowUp') onDownAction();
  });

  home.addEventListener('wheel', (e) => {
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
  });
};

const Structure = () => {
  const profleCardH1 = document.querySelectorAll('.profile-card h1');

  profleCardH1.forEach((item) => {
    const h1Capture = document.createElement('div');
    h1Capture.classList.add('acs');
    h1Capture.innerHTML = `<span></span><span></span><span></span><span></span>`;

    item.append(h1Capture);
  });

  let tlTable = gsap.timeline();

  window.onscroll = (e) => {
    var tl = gsap.timeline();
    // console.log('lenisscroll');
    const isStructure = document.querySelector('#structure');

    if (isStructure) {
      gsap.to('.p1 table tr', {
        y: -(window.scrollY / 10),
        // stagger: e.direction > 0 ? 0.05 : -0.05,
        onStart: () => {
          gsap.to('.profile-card h1', {y: -(window.scrollY / 70), delay: 0.4});
        },
      });

      gsap.to('.p1 table.grid', {
        y: -(window.scrollY / 10),
        delay: 0.3,
        ease: 'power4.out',
        duration: 1.5,
      });
    }
  };
};

(() => {
  gsap.registerPlugin(CustomEase);

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const initHoverCapture = () => {
    const contentsWithCapture = document.querySelectorAll('.with-cptr');

    contentsWithCapture.forEach((item) => {
      const acs = document.createElement('span');
      acs.innerHTML = `<span class="tl"></span><span class="tr"></span><span class="br"></span><span class="bl"></span>`;

      item.append(acs);
    });
  };

  ////NAVIGATION
  // const meteringNavigation = () => {
  const metnavItems = document.querySelectorAll('.metnav-item'),
    metnavTitle = document.querySelector('.metnav-title'),
    metnavContainer = document.querySelector('.metering-nav'),
    metnavArrow = document.querySelector('.metnav-arrow');

  let activeNavPos = 0;

  const getActiveNavPos = () => {
    let posX = 0;
    metnavItems.forEach((item) => {
      if (item.classList.contains('active')) posX = item.offsetLeft;
    });

    activeNavPos = posX;
    return posX;
  };

  const animateMetteringArrow = (e) => {
    const metnavContainerWidth = metnavContainer.scrollWidth;
    const cursorPos = e.layerX + metnavContainerWidth / 2;

    metnavArrow.style.transform = `translate3d(${cursorPos - 8}px,0,0)`;
  };

  metnavItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      metnavItems.forEach((item) => {
        item.classList.remove('active');
      });

      item.classList.add('active');
    });

    item.addEventListener('mouseover', () => {
      item.style = `max-width: ${item.scrollWidth}px`;
    });

    item.addEventListener('mouseleave', () => {
      item.style = '';
    });
  });

  metnavContainer.addEventListener('mousemove', animateMetteringArrow);

  metnavContainer.addEventListener('mouseleave', () => {
    metnavArrow.style.transform = `translate3d(${activeNavPos - 8}px,0,0)`;
  });
  // };
  // meteringNavigation();
  const updateActiveMeteringNavigation = (namespace) => {
    metnavItems.forEach((item) => {
      item.classList.remove('active');
    });
    metnavItems.forEach((item) => {
      if (namespace.includes(item.innerText.toLowerCase()))
        item.classList.add('active');
    });
    metnavArrow.style = `transform: translate3d(${
      getActiveNavPos() - 8
    }px,0,0); opacity: 1`;
  };

  ////BURGER MENU
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.mn-bt');
  const menuBg = document.querySelector('.mn-bg');
  const menuItems = document.querySelectorAll('.mn-item');

  menuBg &&
    (menuBg.onclick = () => {
      menu.getAttribute('class').includes('active')
        ? menu.classList.remove('active')
        : menu.classList.add('active');
    });

  menuButton &&
    menuButton.addEventListener('click', (e) => {
      menu.getAttribute('class').includes('active')
        ? menu.classList.remove('active')
        : menu.classList.add('active');
    });
  const updateActiveMenu = (namespace) => {
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });

    menuItems.forEach((item) => {
      if (
        item.innerText.toLowerCase() == namespace ||
        item.innerHTML.toLocaleLowerCase() == namespace
      ) {
        item.classList.add('active');
      }
    });
  };

  function initNavigateButton() {
    ////NAVIGATE BUTTON (BOTTOM)
    const navigateButtons = document.querySelectorAll('.navigate-button p');
    const navigateButtonsBg = document.querySelectorAll(
      '.navigate-button span'
    );
    const navigateButtonArrow = document.querySelector(
      '.navigate-button p svg'
    );

    navigateButtons.forEach((navigateButton, idx) => {
      navigateButton.addEventListener('mousemove', (e) => {
        const windowWidth = window.innerWidth / 2;
        const posX = e.clientX - windowWidth;

        const windowHeight = navigateButton.scrollHeight / 2;
        const posY = e.offsetY - windowHeight;

        gsap.to(navigateButtonsBg[idx], 1, {
          x: posX / 5,
          y: posY / 2,
          ease: 'power4.out',
        });
        gsap.to(navigateButton, 1, {
          x: posX / 2.5,
          y: posY,
          ease: 'power4.out',
        });
      });

      navigateButton.addEventListener('mouseleave', () => {
        gsap.to(navigateButtonsBg[idx], 1, {
          x: 0,
          y: 0,
          ease: 'power2.out',
          overwrite: true,
          onComplete: () => {
            navigateButtonsBg[idx].style = '';
          },
        });
        gsap.to(navigateButton, 0.5, {
          x: 0,
          y: 0,
          ease: 'power4.out',
          overwrite: true,
          onComplete: () => {
            navigateButton.style = '';
          },
        });
      });
    });
  }

  ////SCROLL FOLLOW
  window.scrollTo(0, 0);
  const main = document.querySelector('main');

  let scrollFollowItems = document.querySelectorAll('[data-scroll]');
  //NEED TO GET INITIAL GETBOUNDREACT OUT OF SCROLL EVENT
  let scrollFollowItemsBoundClientRect = [];
  scrollFollowItems.forEach((item) => {
    scrollFollowItemsBoundClientRect.push(item.getBoundingClientRect());
  });

  const initScrollFollow = () => {
    // console.log('SCROLL FOLLOW');
    scrollFollowItems = document.querySelectorAll('[data-scroll]');
    //NEED TO GET INITIAL GETBOUNDREACT OUT OF SCROLL EVENT
    let _scrollFollowItemsBoundClientRect = [];
    scrollFollowItems.forEach((item) => {
      _scrollFollowItemsBoundClientRect.push(item.getBoundingClientRect());
    });

    scrollFollowItemsBoundClientRect = _scrollFollowItemsBoundClientRect;
  };

  const scrollFollowEffect = () => {
    scrollFollowItems.forEach((item, idx) => {
      const itemViewport = scrollFollowItemsBoundClientRect[idx];
      const scrollSpeed = isNaN(parseInt(item.getAttribute('data-scroll')))
        ? 5
        : parseInt(item.getAttribute('data-scroll'));

      //// IF ON WINDOW
      if (
        window.scrollY + window.innerHeight > itemViewport.top - 100 &&
        window.scrollY < itemViewport.y + itemViewport.height + 100
      ) {
        gsap.to(item, 1.5, {
          y:
            -(
              window.scrollY +
              Math.floor(window.innerHeight / 2) -
              (itemViewport.y + itemViewport.height / 2) +
              100
            ) / scrollSpeed,
          ease: 'power3.out',
        });
      }
    });
  };
  scrollFollowEffect();

  window.addEventListener('scroll', (e) => {
    scrollFollowEffect();
  });

  const initHomeAnimation = () => {
    menu && menu.classList.remove('active');
    initNavigateButton();
    initHoverCapture();
    Home();
  };

  const initAnimation = () => {
    // lenis.destroy();
    menu && menu.classList.remove('active');
    lenis.resize();
    lenis.scrollTo(0, {immediate: true});
    initNavigateButton();
    initHoverCapture();
    initScrollFollow();
    Structure();
  };

  const animateFadeActivityToDetail = () => {
    // console.log('FADE TO DETAIL');
    const linkButtons = document.querySelectorAll('#activity .ac-btn');

    linkButtons.forEach((item) => {
      item.addEventListener('click', (e) => {
        // console.log('lcik');
        const parentContent =
          e.target.parentElement.parentElement.parentElement;
        const title = parentContent.querySelector('.ac-title');
        const desc = parentContent.querySelector('.ac-desc');
        const imageCover = parentContent.querySelector('.ac-img');
        const image = parentContent.querySelector('.ac-img img');
        const imageWrap = parentContent.querySelector('.ac-img-wrap');

        const titleRect = title.getBoundingClientRect();
        const descRect = desc.getBoundingClientRect();
        const imageCoverRect = imageCover.getBoundingClientRect();
        const imageWrapRect = imageWrap.getBoundingClientRect();

        document.querySelector('.container-detail .title').innerText =
          title.innerText;
        document.querySelector('.container-detail .desc').innerText =
          desc.innerText;
        document
          .querySelector('.container-detail .img-wrap img')
          .setAttribute('src', image.getAttribute('src'));

        // console.log();

        gsap.set(parentContent, {opacity: 0});
        gsap.set('.container-detail', {'visibility': 'visible'});
        gsap.from('.container-detail .title', 1, {
          left: titleRect.x,
          top: titleRect.y,
          ease: 'power4.out',
          onComplete: () => {
            document.querySelector('.container-detail .title').style = '';
          },
        });
        gsap.from('.container-detail .desc', 1, {
          left: descRect.x,
          top: descRect.y,
          ease: 'power4.out',
          onComplete: () => {
            document.querySelector('.container-detail .desc').style = '';
          },
        });
        gsap.from('.container-detail .img-container', {
          left: imageCoverRect.x,
          top: imageCoverRect.y,
          width: imageCoverRect.width,
          height: imageCoverRect.height,
          ease: 'power4.out',
          onComplete: () => {
            document.querySelector('.container-detail .img-container').style =
              '';
          },
        });
        gsap.from('.container-detail .img-wrap', 1, {
          left: imageWrapRect.x,
          top: imageWrapRect.y,
          width: imageWrapRect.width,
          height: imageWrapRect.height,
          ease: 'power4.out',
          onComplete: () => {
            document.querySelector('.container-detail .img-wrap').style = '';
          },
        });
      });
    });
  };
  // animateFadeActivityToDetail();

  const animateFadePage = {
    fadeIn: () =>
      gsap.to('.fader', {
        bottom: 0,
        duration: 0.8,
        opacity: 1,
        // escape: 'power4.out',
        ease: CustomEase.create('custom', 'M0,0 C0.031,0.971 0.429,0.989 1,1 '),
      }),
    fadeOut: () =>
      gsap.to('.fader', {
        // bottom: '100dvh',
        opacity: 0,
        onComplete: () => {
          document.querySelector('.fader').style = '';
        },
      }),
  };

  barba.init({
    transitions: [
      {
        name: 'default-transition',
        before() {
          animateFadePage.fadeIn();
        },
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            // delay: 0.3,
          });
        },
        afterLeave(data) {
          data.current.container.remove();
        },
        enter(data) {
          updateActiveMeteringNavigation(data.next.namespace);
          updateActiveMenu(data.next.namespace);
          return gsap.from(data.next.container, {
            opacity: 0,
            delay: 0.3,
          });
        },
        after() {
          animateFadePage.fadeOut();
          initAnimation();
        },
        once(data) {
          updateActiveMeteringNavigation(data.next.namespace);
          initAnimation();
          updateActiveMenu(data.next.namespace);
        },
      },
      {
        name: 'home',
        from: {},
        to: {
          namespace: ['home'],
        },
        before() {
          animateFadePage.fadeIn();
        },
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
          });
        },
        enter(data) {
          updateActiveMeteringNavigation(data.next.namespace);
          updateActiveMenu(data.next.namespace);
          data.current.container.remove();
          initHomeAnimation();
          return gsap.from(data.next.container, {
            delay: 0.3,
            opacity: 0,
          });
        },
        after() {
          animateFadePage.fadeOut();
        },
        once(data) {
          updateActiveMeteringNavigation(data.next.namespace);
          initHomeAnimation();
          // return gsap.from(data.next.container, {
          //   opacity: 0,
          // });
        },
      },
      {
        name: 'activity-detail',
        from: {namespace: ['activity']},
        to: {namespace: ['activity-detail']},
        beforeLeave() {},
        leave(data) {
          animateFadeActivityToDetail();
          //   console.log('BEFORE');
          return gsap.to(data.current.container, {
            delay: 0.5,
          });
        },
        enter(data) {
          data.current.container.remove();
          lenis.scrollTo(0, {immediate: true});
          lenis.resize();
          return gsap.from(data.next.container, {
            duration: 0.01,
          });
        },
        after() {
          initAnimation();
        },
      },
    ],
    views: [
      {
        namespace: 'activity',
        afterEnter() {
          Activity();
          // initScrollFollow()
          animateFadeActivityToDetail();
        },
      },
      {
        namespace: 'contact',
        afterEnter() {
          Contact();
        },
      },
    ],
  });
})();
