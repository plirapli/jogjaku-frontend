import { lazy } from "react";

const MainPage = lazy(() => import("./MainPage"));
const DestinasiPage = lazy(() => import("./DestinasiPage"));
const EventPage = lazy(() => import("./EventPage"));
const KeranjangPage = lazy(() => import("./keranjang/KeranjangPage"));
const TiketSayaSemuaPage = lazy(() => import("./tiket-saya/TiketSayaSemuaPage"));
const TiketSayaAktifPage = lazy(() => import("./tiket-saya/TiketSayaAktifPage"));
const TiketSayaPendingPage = lazy(() => import("./tiket-saya/TiketSayaPendingPage"));
const ProfilePage = lazy(() => import("./profile/ProfilePage"));

export { MainPage, DestinasiPage, EventPage, ProfilePage, KeranjangPage, TiketSayaSemuaPage, TiketSayaPendingPage, TiketSayaAktifPage }