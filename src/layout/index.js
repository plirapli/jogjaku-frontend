import { lazy } from 'react';

const Main = lazy(() => import('./LayoutMain'))
const Login = lazy(() => import('./LayoutAuth'))
const Destinasi = lazy(() => import('./DestinasiLayout'))
const Event = lazy(() => import('./EventLayout'))
const TiketSaya = lazy(() => import('./LayoutTiketSaya'))
const ConstraintLarge = lazy(() => import('./ConstraintLarge'))

export {
  ConstraintLarge,
  Main,
  Login,
  Destinasi,
  Event,
  TiketSaya,
};