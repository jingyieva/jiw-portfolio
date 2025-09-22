import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'intersection-observer'; // old os or browser compatibility in framer-motion
import { ThemeProvider } from "@/contexts/ThemeContext";
import App from '@/App'
import '@/styles/index.css'
import "@/i18n";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
