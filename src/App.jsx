import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getLocalAccessToken } from './utils/auth';
import { getUserOwnProfile } from './utils/user';
import { useProfile } from './hooks/title';

import * as Layout from './layout/';
import * as AuthPage from './pages/auth';
import * as Destinasi from './pages/destinasi';
import * as Aktivitas from './pages/aktivitas';
import * as Event from './pages/event';
import ConstraintLarge from './layout/ConstraintLarge';
import {
  MainPage,
  DestinasiPage,
  EventPage,
  ProfilePage,
  AktivitasPage,
  KeranjangPage,
  TiketSayaSemuaPage,
  TiketSayaPendingPage,
  TiketSayaAktifPage,
} from './pages';
import Loading from './components/loading/Loading';

const App = () => {
  const { profile, setProfile } = useProfile();

  useEffect(() => {
    // Check if login exist
    if (getLocalAccessToken())
      getUserOwnProfile().then((data) => setProfile({ ...data?.user }));
  }, []);

  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center min-h-screen'>
          <Loading />
        </div>
      }
    >
      <div className='min-h-screen bg-gray-100'>
        <Routes>
          {!profile?.username ? (
            // Kalo belum login, masuk ke auth page
            <Route element={<Layout.Login />}>
              <Route path='/*' element={<AuthPage.Login />} />
              <Route path='register/' element={<AuthPage.Register />} />
            </Route>
          ) : (
            <Route element={<Layout.Main />}>
              <Route path='/' element={<MainPage />} />
              <Route path='/destinasi' element={<DestinasiPage />} />
              <Route path='/event' element={<EventPage />} />
              <Route path='/aktivitas' element={<AktivitasPage />} />
              <Route
                path='/aktivitas?filter=:tag'
                element={<AktivitasPage />}
              />
              <Route path='/profil' element={<ProfilePage />} />
              <Route path='/keranjang' element={<KeranjangPage />} />
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
              <Route
                path='/aktivitas/:activityID'
                element={<Layout.Aktivitas />}
              >
                <Route index element={<Aktivitas.DeskripsiPage />} />
              </Route>
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
};

export default App;
