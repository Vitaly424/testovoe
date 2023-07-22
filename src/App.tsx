import React, { Suspense } from 'react';

import './App.css';
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/widgets/Layout";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
}

export default App;
