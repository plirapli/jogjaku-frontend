import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { DestinasiPage, MainPage } from './pages';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route index path='/destinasi' element={<DestinasiPage />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </>
  );
};

export default App;
