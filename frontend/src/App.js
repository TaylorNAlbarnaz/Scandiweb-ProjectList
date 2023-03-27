import { Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import AddProductPage from './Pages/AddProductPage';

function App() {
  return (
    <Routes>
        <Route exact path="/" Component={MainPage}/>
        <Route exact path="/add-product" Component={AddProductPage}/>
    </Routes>
  );
}

export default App;
