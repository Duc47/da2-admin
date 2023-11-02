/* eslint-disable prettier/prettier */
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Admin, CustomRoutes, Resource, localStorageStore } from 'react-admin';
import { Route } from 'react-router';

import authProvider from './authProvider';
import categories from './categories';
import { Dashboard } from './dashboard';
import dataProviderFactory from './dataProvider';
import englishMessages from './i18n/en';
import invoices from './invoices';
import { Layout, Login } from './layout';
import { darkTheme, lightTheme } from './layout/themes';
import orders from './orders';
import products from './products';
import reviews from './reviews';
import Segments from './segments/Segments';
import visitors from './visitors';
import {
    firebaseConfig as config,
    firebaseApp as firebaseAppInstance,
} from './firebase-config';
import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
} from 'react-admin-firebase';
import {
    CommentList,
    CommentEdit,
    CommentCreate,
    CommentShow,
} from './test/comment';
const i18nProvider = polyglotI18nProvider(
    locale => {
        if (locale === 'fr') {
            return import('./i18n/fr').then(messages => messages.default);
        }

        // Always fallback on english
        return englishMessages;
    },
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
    ]
);
const options = {
    app: firebaseAppInstance,
};

const dataProvider = FirebaseDataProvider(config, options);
//const authProvider = FirebaseAuthProvider(config, options);
const App = () => (
    <Admin
        title=""
        dataProvider={
            /* dataProvider */ dataProviderFactory(
                process.env.REACT_APP_DATA_PROVIDER || ''
            )
        }
        store={localStorageStore(undefined, 'ECommerce')}
        authProvider={authProvider}
        dashboard={Dashboard}
        loginPage={Login}
        layout={Layout}
        i18nProvider={i18nProvider}
        disableTelemetry
        theme={lightTheme}
        darkTheme={darkTheme}
        defaultTheme="light"
    >
        <CustomRoutes>
            <Route path="/segments" element={<Segments />} />
        </CustomRoutes>
        <Resource name="customers" {...visitors} />
        <Resource name="commands" {...orders} options={{ label: 'Orders' }} />
        <Resource name="invoices" {...invoices} />
        <Resource name="products" {...products} />
        <Resource name="categories" {...categories} />
        <Resource name="reviews" {...reviews} />
        <Resource
            name="KHACHHANG"
            list={CommentList}
            show={CommentShow}
            create={CommentCreate}
            edit={CommentEdit}
        />
    </Admin>
);

export default App;
