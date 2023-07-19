import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Helmet } from 'react-helmet';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Register = () => {
    return (
        <>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </>
        
    );
};

export default Register;