import React from 'react';
import ProductSearch from "./components/searchProduct/searchProducts";
import SelectPlugin from "./components/selectPlugin";
import SliderPhoto from "./components/sliderPlugin";
import TestjQuery from "./components/testWithJQuery";
import SimpleMap from "./components/yandexMapPlugin";
import PhotoGallery from "./components/photoGalleryPlugin";
import Calendar from "./components/calendarPlugin";
import Chart from "./components/chartPlugin";
import Counter from "./components/reducerCounter";
import UseSass from "./components/useSass";


function App() {

    return (
        <div className="App">
          <ProductSearch />
          <TestjQuery />
          <SelectPlugin />
          <Counter />
          <SliderPhoto />
          <UseSass />
          <SimpleMap/>
          <PhotoGallery />
          <Calendar />
          <Chart />
        </div>
    );

}

export default App;
