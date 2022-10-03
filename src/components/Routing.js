import React from 'react';
import App from '../App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsContent from './DetailsContent';

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='detail/:id' element={<DetailsContent />} />
            </Routes>
        </BrowserRouter>
    )
}