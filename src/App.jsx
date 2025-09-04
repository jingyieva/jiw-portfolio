import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from "@/pages/404";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const About = lazy(() => import("@/pages/About"));

export default function App() {
    return (
        <div className="min-h-dvh flex flex-col">
            <Navbar />
            <main id="main" className="flex-1">
                <Routes>
                    <Route path="/" element={
                        <Suspense fallback={<div className="p-6 opacity-70">Loading…</div>}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/projects" element={<Suspense fallback={<div className="p-6 opacity-70">Loading…</div>}><Projects /></Suspense>} />
                    <Route path="/about" element={<Suspense fallback={<div className="p-6 opacity-70">Loading…</div>}><About /></Suspense>} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
