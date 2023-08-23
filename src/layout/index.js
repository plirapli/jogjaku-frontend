import { lazy } from 'react';

const Destinasi = lazy(() => import('./DestinasiLayout'))
const ConstraintLarge = lazy(() => import('./ConstraintLarge'))
const Login = lazy(() => import('./LayoutAuth'))
const Main = lazy(() => import('./LayoutMain'))
const TiketSaya = lazy(() => import('./LayoutTiketSaya'))

export { Login, Main, ConstraintLarge, Destinasi, TiketSaya };