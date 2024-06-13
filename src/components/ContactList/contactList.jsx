import { useSelector } from 'react-redux';
import Contact from '../Contact/contact';
import css from '../ContactList/contactList.module.css';
import { selectContacts } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactListItem}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}
