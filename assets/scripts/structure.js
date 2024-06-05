const Structure = () => {
  const profleCardH1 = document.querySelectorAll('.profile-card h1');

  profleCardH1.forEach((item) => {
    const h1Capture = document.createElement('div');
    h1Capture.classList.add('acs');
    h1Capture.innerHTML = `<span></span><span></span><span></span><span></span>`;

    item.append(h1Capture);
  });

  let tlTable = gsap.timeline();

  // const tableTr = document.querySelectorAll("table.structure tr")
  // const table = document.querySelector(".p1 table")

  window.onscroll= (e) => {
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
        // stagger: e.direction > 0 ? 0.05 : -0.05,
        // onStart: () => {
        //     gsap.to('.profile-card h1', { y: -(window.scrollY / 50), delay: 0.4 })
        //     gsap.to('.p1 table', { y: -(window.scrollY / 10), delay: 0.1 })
        // },
      });
    }

    // .to('.profile-card h1', { y: -(window.scrollY / 50), delay: 0.4 }, "<")
    //     .to('.p1 table', {
    //         y: -(window.scrollY / 10), delay: 0.1
    //     }, "<")

    // tableTr.forEach(item => {
    //     item.style = `transform: translateY(${e.direction > 0 ? -(window.scrollY / 10) : (window.scrollY / 20)}px); transition: 1s`
    // })

    // setTimeout(() => {
    //     table.style = `transform: translateY(${e.direction > 0 ? -(window.scrollY / 25) : (window.scrollY / 20)}px);transition: 1.5s`
    //     tableTr.forEach(item => {
    //         item.style = `transform: translateY(0px); transition: 1s`
    //     })
    // }, 800);
  };
};

export default Structure;
