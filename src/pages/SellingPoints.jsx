import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SellingPoints = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="__next" data-reactroot="">
            <Helmet>
                <title>Selling Points</title>
            </Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mrpops.ua/en/" },
                        { "@type": "ListItem", "position": 2, "name": "Selling points" }
                    ]
                })}
            </script>

            <div className="app" id="app">
                <div className="styles_smooth_scroll__uii3t v-smooth-scroll no-scroll v-scrollbar-parent" id="smooth-scroll">
                    <div className="v-smooth-scroll__container">
                        <div className="styles_template_map___hTnu">
                            <div className="styles_template_map__map___SADW styles_loaded__6cNw8">
                                <iframe
                                    data-lang="en"
                                    title="Selling points"
                                    className="js-preload-global js-preload-inner"
                                    data-is-loaded="true"
                                    src="https://map.mrpops.club/?hideButton=true&amp;lang=en"
                                    style={{ width: "100%", height: "100vh", border: "0" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellingPoints;
