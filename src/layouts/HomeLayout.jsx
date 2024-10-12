import React, { useState, useEffect } from 'react';
import DataContext from '../context/IcecreamContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom'; 
import Loader from '../components/Loader'; 
import PageLoader from '../components/PageLoader'; 

const HomeLayout = () => {
  const [initialLoading, setInitialLoading] = useState(true); 
  const [pageLoading, setPageLoading] = useState(false); 
  const location = useLocation(); 

  
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setInitialLoading(false); 
    }, 6000); 

    return () => clearTimeout(initialTimer); 
  }, []);

 
  useEffect(() => {
    if (!initialLoading) {
      
      setPageLoading(true);

      const pageTimer = setTimeout(() => {
        setPageLoading(false); 
      }, 3000); 

      return () => clearTimeout(pageTimer); 
    }
  }, [location]); 

  
  if (initialLoading) {
    return <Loader />;
  }

 
  if (pageLoading) {
    return <PageLoader />;
  }

 
  return (
    <DataContext>
      <Header />
      <Outlet />
      <Footer />
    </DataContext>
  );
};

export default HomeLayout;
