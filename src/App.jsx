import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from "@/pages/404";
import LanguageLayout from "@/routes/LanguageLayout";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const About = lazy(() => import("@/pages/About"));
const Updates = lazy(() => import("@/pages/Updates"));

const Fallback = <div className="p-6 opacity-70">Loading…</div>;

export default function App() {
    return (
        <div className="min-h-dvh flex flex-col">
            <Navbar />
            <main id="main" className="flex-1">
                <Routes>
                    <Route path=":lang?" element={<Suspense fallback={Fallback}><LanguageLayout /></Suspense>}>
                        <Route index element={
                            <Suspense fallback={Fallback}><Home /></Suspense>
                        } />
                        <Route path="projects" element={<Suspense fallback={Fallback}><Projects /></Suspense>} />
                        <Route path="about" element={<Suspense fallback={Fallback}><About /></Suspense>} />
                        <Route path="updates" element={<Suspense fallback={Fallback}><Updates /></Suspense>} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
