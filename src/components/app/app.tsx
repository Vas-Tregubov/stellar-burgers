import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { ConstructorPage } from '@pages';
import { Feed } from '@pages';
import { Login } from '@pages';
import { ForgotPassword } from '@pages';
import { ResetPassword } from '@pages';
import { Register } from '@pages';
import { Profile } from '@pages';
import { ProfileOrders } from '@pages';
import { NotFound404 } from '@pages';
import { Modal } from '@components';
import { OrderInfo } from '@components';
import { IngredientDetails } from '@components';
import { AppHeader } from '@components';

import '../../index.css';
import styles from './app.module.css';

const App = () => (
  <Router>
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/orders' element={<ProfileOrders />} />
        <Route path='*' element={<NotFound404 />} />

        {/* Модальные окна */}

        <Route
          path='/feed/:number'
          element={
            <Modal
              title='Order Info'
              onClose={() => {
                /* обработчик закрытия модалки */
              }}
            >
              <OrderInfo />
            </Modal>
          }
        />

        <Route
          path='/ingredients/:id'
          element={
            <Modal
              title='Ingredient Details'
              onClose={() => {
                /* обработчик закрытия модалки */
              }}
            >
              <IngredientDetails />
            </Modal>
          }
        />

        <Route
          path='/profile/orders/:number'
          element={
            <Modal
              title='Order Info'
              onClose={() => {
                /* обработчик закрытия модалки */
              }}
            >
              <OrderInfo />
            </Modal>
          }
        />
      </Routes>
    </div>
  </Router>
);

export default App;
