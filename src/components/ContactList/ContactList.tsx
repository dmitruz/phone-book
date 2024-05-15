import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { RootState } from '../../redux/store'
import styles from './ContactList.module.css';

interface ContactListProps { }

interface Contact {
    id: string;
    name: string;
    number: string;
}

export const ContactList: React.FC<ContactListProps> = () => {
    const dispatch = useDispatch();

    const contacts: Contact[] = useSelector((state: RootState) => {
        const filterValue = state.filter.filterValue.toLowerCase(); // Accessing filterValue
        return state.contacts.items.filter(item =>
            item.name.toLowerCase().includes(filterValue)
        );
    });

    return (
        <>
            <ul>
                {contacts.map(item => (
                    <li key={item.id} className={styles.contactUser}>
                        <p className={styles.user}>
                            <b>{item.name}</b>
                            {item.number}
                        </p>
                        <button type="button"
                            onClick={() => dispatch(deleteContact(item.id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}