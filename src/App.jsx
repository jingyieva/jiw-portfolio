import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';

import Fallback from "@/components/Fallback";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from "@/pages/404";
import LanguageLayout from "@/routes/LanguageLayout";
import { PAGE_PATHS, PAGE_COMPONENTS } from "@/constants/routes";


const render = (path) => {
    const Comp = PAGE_COMPONENTS[path];

    return <Comp />
}

export default function App() {
    return (
        <div className="min-h-dvh flex flex-col">
            <Navbar />
            <main id="main" className="flex-1">
                <Routes>
                    <Route path="404/:lang?" element={<Suspense fallback={<Fallback />}><LanguageLayout /></Suspense>}>
                        <Route index element={<NotFound />} />
                    </Route>
                    <Route path=":lang?" element={<Suspense fallback={<Fallback />}><LanguageLayout /></Suspense>}>
                        {PAGE_PATHS.map(path => (
                            path === "" ? (
                                <Route
                                    key="index"
                                    index
                                    element={
                                        <Suspense fallback={<Fallback />}>
                                            {render("")}
                                        </Suspense>
                                    }
                                />
                            ) : (
                                <Route
                                    key={path}
                                    path={path}
                                    element={
                                        <Suspense fallback={<Fallback />}>
                                            {render(path)}
                                        </Suspense>
                                    }
                                />
                            )
                        ))}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
