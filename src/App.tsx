import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
const Basket = React.lazy(() => import('./pages/basket/Basket'));
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/basket"
            element={
              <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                <Basket isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
