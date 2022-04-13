import React, { Fragment } from 'react';
import Home from './pages/Home';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main role="main">
        <div className="container-fluid pl-0 pr-0 pt-4 pb-4 backgroundTexture">
          <Home />
        </div>
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
