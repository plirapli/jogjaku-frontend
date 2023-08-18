import { lazy } from 'react';

const Destinasi = lazy(() => import('./DestinasiLayout'))
const ConstraintLarge = lazy(() => import('./ConstraintLarge'))
const Login = lazy(() => import('./LayoutAuth'))
const Main = lazy(() => import('./LayoutMain'))

export { Login, Main, ConstraintLarge, Destinasi };