import { useSelector } from 'react-redux';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import styles from './App.module.css'

export const App = () => {
  const users = useSelector(state => state.contacts.items);
  return (
    <section className={styles.phonebook}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.container}>
        <h2>Contacts</h2>
        {!users.length ? (
          <h3>Your phonebook is empty! Add your first contact</h3>
        ) : (
          <>
            <h3>Your phonebook has {users.length} contacts</h3>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    </section>
  );
}

