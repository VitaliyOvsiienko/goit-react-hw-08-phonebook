import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import Layout from './Layout/Layout';
import { useAuth } from 'hooks';
import { refresh } from 'redux/auth/operations';
import { MainLoader } from './Loader';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));



const theme = createTheme({
    typography: {
        button: {
            fontFamily: 'Roboto',
        },
        h1: {
            fontFamily: 'Roboto',
        },
        h2: {
            fontFamily: 'Roboto',
        },
  },

palette: {
primary: {
    main: '#2196F3',
},
},

  breakpoints: {
    values: {
        xs: 300,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
    },
});


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
 <ThemeProvider theme={theme}>
      {isRefreshing ? (<MainLoader />) :
        (<Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/register' element={<PublicRoute><RegisterPage /></PublicRoute>} />
            <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>} />
            <Route path='/contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />

            <Route path='*' element={<ErrorPage />} />
         
          </Route>
        </Routes>)}
    </ThemeProvider>
  );
};