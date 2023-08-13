import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { DestinasiPage, EventPage, MainPage } from './pages';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route index path='/destinasi' element={<DestinasiPage />} />
            <Route index path='/event' element={<EventPage />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </>
  );
};

export default App;
