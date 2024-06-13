// import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/contactList';
import SearchBox from './components/SearchBox/searchBox';
// import contacts from './contacts.json';
import ContactForm from './components/ContactForm/contactForm';

function App() {
  // const [searchdata, setSearchdata] = useState('');
  // const [newContactList, setNewContactList] = useState(() => {
  //   const savedContacts = localStorage.getItem('contactList');
  //   return savedContacts ? JSON.parse(savedContacts) : contacts;
  // });

  // const searchResult = newContactList.filter(contact =>
  //   contact.name.toLowerCase().includes(searchdata.toLowerCase())
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contactList', JSON.stringify(newContactList));
  // }, [newContactList]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
