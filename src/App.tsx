import { ListAlbums } from './components/ListAlbums';
import { ListFotos } from './components/ListFotos';
import { ListUsers } from './components/ListUsers';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; //importing routing elements
import { ErrorPage } from './components/ErrorPage';

import s from './components/style.module.scss';

function App() {
  return (
    <div>
      <Link to="/" className={s.navbar}>
        Back home
      </Link>

      <Routes>
        <Route path="/" element={<ListUsers />} />
        <Route path="/listAlbums" element={<ListAlbums />} />
        <Route path="/listFotos" element={<ListFotos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
