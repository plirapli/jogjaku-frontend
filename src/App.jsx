import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useProfile } from './hooks/title';
import { getUserOwnProfile } from './utils/user';
import { getLocalAccessToken } from './utils/auth';

import * as Layout from './layout/';
import * as AuthPage from './pages/auth';
import * as Destinasi from './pages/destinasi';
import ConstraintLarge from './layout/ConstraintLarge';
import {
  DestinasiPage,
  EventPage,
  KeranjangPage,
  MainPage,
  TiketSayaPage,
} from './pages';

const App = () => {
  const { profile, setProfile } = useProfile();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Check if login exist
    if (getLocalAccessToken()) {
      getUserOwnProfile()
        .then((data) => setProfile({ ...data?.user }))
        .finally(() => setIsInitializing(false));
    } else {
      setIsInitializing(false);
    }
  }, []);

  if (!isInitializing) {
    return (
      <>
        <div className='min-h-screen bg-gray-100'>
          <Routes>
            {!profile?.username ? (
              // Kalo belum login, masuk ke auth page
              <Route element={<Layout.Login />}>
                <Route path='/*' element={<AuthPage.Login />} />
                <Route
                  path='forgot-password/'
                  element={<AuthPage.ForgotPassword />}
                />
                <Route path='register/' element={<AuthPage.Register />} />
              </Route>
            ) : (
              <Route element={<Layout.Main />}>
                <Route path='/' element={<MainPage />} />
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

                {/* Not found page */}
                <Route
                  path='not-found'
                  element={
                    <ConstraintLarge>
                      <div className='mt-20'>Halamaan tidak ditemukan.</div>
                    </ConstraintLarge>
                  }
                />
                <Route
                  path='*'
                  element={
                    <ConstraintLarge>
                      <div className='mt-20'>Halamaan tidak ditemukan.</div>
                    </ConstraintLarge>
                  }
                />
              </Route>
            )}
          </Routes>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
