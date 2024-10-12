import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IceCream } from '../context/IcecreamContext';
import MarqueIcwCream from '../components/MarqueIceCream';
import StickySection from '../components/StickySection';
import Card from '../components/Card';

const ProductDetail = () => {
    const { pathname, hash } = useLocation()
    useEffect(() => {

        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
    const { id } = useParams();
    const { data } = useContext(IceCream);
    const product = data.find((item) => item.id === id);

    if (!product) {
        return <div className='big-title'><h1>Ürün bulunamadı</h1>
        </div>;
    }

    return (
        <div id='product_detail'>
            <div style={{
                backgroundImage: `url(${product.productBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: 'white'
            }} className='animated-image'></div>
            
            <MarqueIcwCream text={product.marqueeText} />

            {/* <StickySection/> */}

            <div className="product_container_content">
                <div className="container_content">
                    <div className="product_description">
                        <h2>
                            {product.description}
                        </h2>
                    </div>
                    <div className="product_about">
                        <h3>Compound:</h3>
                        <p>{product.compound}</p>
                        <div className="energy_value">
                            <h3>Energy Value:</h3>
                            <div className="energy_value_content">
                                <p>
                                    <span>Proteins: </span>
                                    <span>{product.energyValue.proteins}</span>
                                </p>
                                <p>
                                    <span>Fats: </span>
                                    <span>{product.energyValue.fats}</span>
                                </p>
                                <p>
                                    <span>Carbohydrates: </span>
                                    <span>{product.energyValue.carbohydrates}</span>
                                </p>
                                <p>
                                    <span>Calories: </span>
                                    <span>{product.energyValue.calories}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_content_img">
                    <img src={product.productContentImage} alt="" />
                </div>
            </div>

            <div class="big-title"><h1>  It's worth a try</h1></div>
            <Card limit={4} />




        </div>
    );
};

export default ProductDetail;
