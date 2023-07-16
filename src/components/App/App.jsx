import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Frame, Container, Title, SubTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from '../Loader';
import { Notify } from 'notiflix';


export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Container>
      <Frame>
         {error && Notify.failure('Houston, we have a problem')}
        <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
        <Filter />
         {isLoading && !error && <Loader />}
      <ContactList/>
      </Frame>
    </Container>
  );
};