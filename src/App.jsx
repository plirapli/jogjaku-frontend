import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout, DestinasiLayout } from './layout/';
import {
  DestinasiPage,
  EventPage,
  KeranjangPage,
  MainPage,
  TiketSayaPage,
} from './pages';
import * as Destinasi from './pages/destinasi';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route path='/destinasi' element={<DestinasiPage />} />
            <Route path='/destinasi/:destinasiID' element={<DestinasiLayout />}>
              <Route index element={<Destinasi.DeskripsiPage />} />
              <Route index path='tiket' element={<Destinasi.TiketPage />} />
            </Route>
            <Route path='/event' element={<EventPage />} />
            <Route path='/profil' element={<KeranjangPage />} />
            <Route path='/keranjang' element={<KeranjangPage />} />
            <Route path='/tiket-saya' element={<TiketSayaPage />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </>
  );
};

export default App;
