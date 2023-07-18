import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { toast } from 'react-hot-toast';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { selectIsLoading } from 'redux/contacts/selectors';
import { RemoveLoader } from 'components/Loader';


export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const operation = useSelector(selectIsLoading);

    const handleDelete = async () => {
        try {
            await dispatch(deleteContact(id)).unwrap();
            toast.success(`${name} was deleted from contacts`)
        } catch (error) {
            console.log(error)
        } 
    };


    return (
        <>
            <Grid container sx={{ mb: {xs:4,sm:4, md:1} }} spacing={1}
                columns={{xs:12,sm:12, md:16}} >

                    <Grid item xs={12} sm={6} md={6} >
                        <Typography
                        paragraph
                        sx={{
                        fontSize: {
                            xs: '16px',
                            sm: '18px',
                            },
                            textAlign: {
                                xs: 'center',
                                md: 'left'
                            }
                        }} 
                        fontWeight='500'
                        color='#212121'
                    >
                        {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} >
                        <Typography 
                        sx={{
                        fontSize: {
                            xs: '16px',
                            sm: '18px',
                            },
                            textAlign: {
                                xs: 'center',
                                md: 'left'
                            }
                        }}
                        color='#757575'
                        paragraph
                        >
                        {number}
                        </Typography>
                    </Grid>

                    <Grid item xs={6}  md>
                        <Button
                        type="button"
                        variant="outlined"
                        aria-label="delete"
                        size="small"
                        color="primary"
                        startIcon={operation === id ? <RemoveLoader /> : <DeleteIcon/>}
                        onClick={handleDelete}>
                        {operation === id ? 'Deleting...' : 'Delete'}
                        </Button>
                    </Grid>

            </Grid>
        </>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};