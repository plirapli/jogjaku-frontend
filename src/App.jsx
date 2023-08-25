import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getLocalAccessToken } from './utils/auth';
import { getUserOwnProfile } from './utils/user';
import { useProfile } from './hooks/title';

import * as Layout from './layout/';
import * as AuthPage from './pages/auth';
import * as Destinasi from './pages/destinasi';
import * as Event from './pages/event';
import ConstraintLarge from './layout/ConstraintLarge';
import {
  MainPage,
  DestinasiPage,
  EventPage,
  ProfilePage,
  KeranjangPage,
  TiketSayaSemuaPage,
  TiketSayaPendingPage,
  TiketSayaAktifPage,
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
      <Suspense fallback={<div>Loading...</div>}>
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
                  <Route path='tiket' element={<Destinasi.TiketPage />} />
                </Route>
                <Route path='/event/:eventID' element={<Layout.Event />}>
                  <Route index element={<Event.DeskripsiPage />} />
                  <Route path='tiket' element={<Event.TiketPage />} />
                </Route>
                <Route path='/event' element={<EventPage />} />
                <Route path='/profil' element={<ProfilePage />} />
                <Route path='/keranjang' element={<KeranjangPage />} />

                <Route path='/tiket-saya' element={<Layout.TiketSaya />}>
                  <Route index element={<TiketSayaSemuaPage />} />
                  <Route path='pending' element={<TiketSayaPendingPage />} />
                  <Route path='aktif' element={<TiketSayaAktifPage />} />
                </Route>

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
      </Suspense>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
