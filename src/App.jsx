import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Layout from './layout/';
import {
  DestinasiPage,
  EventPage,
  KeranjangPage,
  MainPage,
  TiketSayaPage,
} from './pages';
import * as AuthPage from './pages/auth';
import * as Destinasi from './pages/destinasi';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route element={<Layout.Login />}>
            <Route path='/*' element={<AuthPage.Login />} />
            <Route
              path='forgot-password/'
              element={<AuthPage.ForgotPassword />}
            />
            <Route path='register/' element={<AuthPage.Register />} />
            <Route path='tes/' element={<>Dah bisa</>} />
          </Route> */}
          <Route element={<Layout.Main />}>
            <Route index path='/' element={<MainPage />} />
            <Route path='/destinasi' element={<DestinasiPage />} />
            <Route
              path='/destinasi/:destinationID'
              element={<Layout.Destinasi />}
            >
              <Route index element={<Destinasi.DeskripsiPage />} />
              <Route index path='tiket' element={<Destinasi.TiketPage />} />
            </Route>
            <Route path='/event' element={<EventPage />} />
            <Route path='/profil' element={<KeranjangPage />} />
            <Route path='/keranjang' element={<KeranjangPage />} />
            <Route path='/tiket-saya' element={<TiketSayaPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
