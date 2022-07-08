import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
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
      </Routes>
    </BrowserRouter>
  );
}
