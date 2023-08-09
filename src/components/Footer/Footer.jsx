import { Box, Link, Typography } from "@mui/material";

function Copyright(props) {
    return (
        <Box  color="text.secondary" align="center" {...props}>
            <Typography variant="bod2" color="white">Developed by {' '}
                <Link color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/vitaly-ovsiyenko/">
                    Vitaliy Ovsiyenko
                </Link>{' '}
            </Typography>
        </Box>
    );
};

export const Footer = () => {
    return (
        <Box component='footer' >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#2196f3',
                }}>
                <Copyright sx={{ my: 2 }} />
            </Box>
        </Box>
    );
};