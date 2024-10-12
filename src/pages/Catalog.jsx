import React, { useEffect } from 'react'
// import data from '../data/IceCream.json'
import Card from '../components/Card'
import { Helmet } from 'react-helmet';

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id='catalog_items'>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <div className="big-title">
        <h1>catalog</h1>
      </div>
      <Card />


    </section>
  )
}

export default Catalog