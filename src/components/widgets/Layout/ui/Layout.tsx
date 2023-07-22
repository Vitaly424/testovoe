import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import { Header } from "../../Header";

export const Layout = () => {
    return (
        <div className="app">
            <div className="content">
                <Header />
                <div className="content__page">
                    <Suspense fallback={<h1>Загрузка страницы ...</h1>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
