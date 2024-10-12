const ProductCard = ({ product = {} }) => { 
    const handleMouseEnter = (e, hoverBg) => {
      const direction = getDirection(e, e.currentTarget);
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
    };
  
    const handleMouseLeave = (e, hoverBg) => {
      const direction = getDirection(e, e.currentTarget);
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
    };
  
    const getDirection = (event, element) => {
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
    };
  
    return (
      <div className="product-card"
        onMouseEnter={(e) => handleMouseEnter(e, e.currentTarget.querySelector('.product-hover-bg'))}
        onMouseLeave={(e) => handleMouseLeave(e, e.currentTarget.querySelector('.product-hover-bg'))}>
        <div className="product-hover-bg"></div>
        <div className="product-image">
          {/* Check if product.imageUrl exists before rendering */}
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="hover-emoji">
          <div className="emoji-container">
            <div className="static-emoji"></div>
            <div className="active-emoji"></div>
          </div>
        </div>
        <div className="product-content">
          <div className="product-info">
            {/* Check if product properties exist before rendering */}
            <div className="product-name">{product.name || "No Name"}</div>
            <div className="product-weight">Serving weight: {product.weight || "Unknown weight"}</div>
            <div className="product-price">{product.price ? `${product.price} UAH` : "Price not available"}</div>
          </div>
          <div className="button-wrapper">
            <div className="button-container">
              <div className="border-container">
                <div className="circular-button">
                  <img src="download.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  