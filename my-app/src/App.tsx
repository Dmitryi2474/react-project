import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/layout';
import GridBlock from './components/ui/GridBlock';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import MobileData from './Pages/MobileData';
// @ts-ignore  
import classes from './scss/app.module.scss';

function App() {
  return (
    <Layout>
      <div className={classes.content}>
        <GridBlock>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mobile/:id" element={<MobileData />} />
          </Routes>
        </GridBlock>
      </div>
    </Layout>
  );
}

export default App;
