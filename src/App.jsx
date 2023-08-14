import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import DestinasiLayout from './layout/DestinasiLayout';
import { DestinasiPage, EventPage, MainPage } from './pages';
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
          </Routes>
        </MainLayout>
      </Suspense>
    </>
  );
};

export default App;
