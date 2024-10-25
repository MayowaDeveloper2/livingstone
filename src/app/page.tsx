import './globals.css';

import Heropage from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="" >
      <Navbar />
      <Heropage />
      <Footer />
     
    </main>
  );
}