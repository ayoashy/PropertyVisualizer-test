import { Outlet, ScrollRestoration } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
const RootLayout = () => {
  return (
    <div className='font-gilroy-regular'>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
