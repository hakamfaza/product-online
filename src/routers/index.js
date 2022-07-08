import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from '../pages/Home';

export default function router() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Home />} />
        {/* <Route path="/example">
          <Route index element={<Example />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
