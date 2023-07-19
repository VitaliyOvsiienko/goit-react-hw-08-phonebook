import { LoginForm } from "components/LoginForm/LoginForm";
import { Helmet } from 'react-helmet';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm/>
        </>
        
    );
};

export default Login;