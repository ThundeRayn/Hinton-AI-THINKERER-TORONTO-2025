import Navbar from './Section/Navbar';
import Hero from './Section/Hero/Hero';
import Content from './Section/Content';
import Footer from './Section/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <Content />

      <Footer />
    </div>
  );
}

export default App;
