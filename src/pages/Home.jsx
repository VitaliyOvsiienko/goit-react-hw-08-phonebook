import { Box, Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import imgBgd from './../images/bdg.jpg'

const theme = createTheme({
    palette: {
        primary: {
            main: '#2196F3',
        },
        secondary: {
            main: '#d9d9dc',
        },
    },
    typography: {
        button: {
            fontFamily: 'Roboto',
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

const Home = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleStart = () => {
        isLoggedIn ? 
        navigate('/contacts') : navigate('/login')
    }
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Box conponent='main' sx={{
                backgroundImage: `linear-gradient(rgba(47, 68, 158, 0.3), rgba(47, 48, 58, 0.3)), url(${imgBgd})`,
               
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(0, 0, 50, 0.30 )',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginTop: 1.5,
                marginBottom: 1.5,
                paddingTop: 10,
                paddingBottom: 10,
                textAlign: 'center',
                minHeight: '69vh',
                }}>
                    <Typography
                    sx={{
                        mb: 1,
                        fontSize: {
                            xs: '30px',
                            sm: '40px',
                            md: '52px'
                        }
                    }}
                        variant="h2"
                        fontWeight='500'
                        fontFamily='Roboto'
                        color='#ffffff'
                        maxWidth='480px'
                        marginLeft='auto'
                        marginRight='auto'
                        >
                        Store all your <br/>contacts in
                    </Typography>
                    <Typography
                    sx={{
                        mb: {
                            xs: 2.5,
                            sm: 3,
                            md: 6
                        }, fontSize: {
                            xs: '34px',
                            sm: '44px',
                            md: '56px'
                        }}}
                        variant="h1"
                        fontWeight='700'
                        fontFamily='Roboto'
                        color='#ffffff'
                        maxWidth='480px'
                        marginLeft='auto'
                        marginRight='auto'
                        >
                        Phonebook
                    </Typography>
                    <Button
                        type="button"
                        variant="contained"
                        aria-label="Start"
                        size="large"
                        color="primary"
                        endIcon={<KeyboardArrowRightIcon />}
                        onClick={handleStart}>
                        Get started
                    </Button>
            </Box>
        </ThemeProvider>
    );
};

export default Home;