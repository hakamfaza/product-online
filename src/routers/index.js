import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import About from '../pages/About';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

export default function router() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="/product/:id">
          <Route index element={<Detail />} />
        </Route>
        <Route path="/about">
          <Route index element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
