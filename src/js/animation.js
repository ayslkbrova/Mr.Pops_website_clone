

export const addCardAnimations = (cardRefs) => {
  cardRefs.current.forEach((card) => {
    if (card) {
      const hoverBg = card.querySelector('.product-hover-bg');

      function getDirection(event, element) {
        const { top, right, bottom, left, width, height } = element.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;

        const fromTop = Math.abs(y);
        const fromBottom = Math.abs(height - y);
        const fromLeft = Math.abs(x);
        const fromRight = Math.abs(width - x);

        const min = Math.min(fromTop, fromBottom, fromLeft, fromRight);

        if (min === fromTop) return 'top';
        if (min === fromBottom) return 'bottom';
        if (min === fromLeft) return 'left';
        return 'right';
      }

      function handleMouseEnter(event) {
        const direction = getDirection(event, card);
        hoverBg.style.transition = 'none';

        switch (direction) {
          case 'top':
            hoverBg.style.transform = 'translateY(-100%)';
            break;
          case 'bottom':
            hoverBg.style.transform = 'translateY(100%)';
            break;
          case 'left':
            hoverBg.style.transform = 'translateX(-100%)';
            break;
          case 'right':
            hoverBg.style.transform = 'translateX(100%)';
            break;
          default:
            break;
        }

        setTimeout(() => {
          hoverBg.style.transition = 'transform 0.4s ease';
          hoverBg.style.transform = 'translate(0, 0)';
        }, 10);
      }

      function handleMouseLeave(event) {
        const direction = getDirection(event, card);
        hoverBg.style.transition = 'transform 0.4s ease';

        switch (direction) {
          case 'top':
            hoverBg.style.transform = 'translateY(-100%)';
            break;
          case 'bottom':
            hoverBg.style.transform = 'translateY(100%)';
            break;
          case 'left':
            hoverBg.style.transform = 'translateX(-100%)';
            break;
          case 'right':
            hoverBg.style.transform = 'translateX(100%)';
            break;
          default:
            break;
        }
      }

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup function for removing event listeners
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  });
};
