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
      // itemsBg[idx].style = '';
      // item.style = '';

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

export default Activity;
