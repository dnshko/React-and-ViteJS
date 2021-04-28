import React, { useState } from 'react'
import { Provider } from "./Context";
import { Actions } from "./Actions/Actions";

import {Header,Carousel,Banners,TopSellingProducts,NewModels,Brands,Footer} from './components/index'

function App() {
  const data = Actions();
  return (
  <Provider value={data} > 
  <div id="page">
    <Header />
      <main>
        <Carousel />
        <Banners />
        <TopSellingProducts />
        <NewModels />
        <Brands />
      </main>
      <Footer />
  </div>
  </Provider>
  )
}

export default App
