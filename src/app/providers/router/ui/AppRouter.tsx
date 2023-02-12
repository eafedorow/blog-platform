import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import i18n from 'shared/config/i18n/i18n';

const AppRouter = () => (
    <Suspense fallback={<div>{i18n.t('Загрузка')}</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={(<div className="page-wrapper">{element}</div>)}
                    path={path}
                />
            )) }
        </Routes>
    </Suspense>
);

export default AppRouter;
