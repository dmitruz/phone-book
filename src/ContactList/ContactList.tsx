import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import styles from './ContactList.module.css';

export const ContactList: React.FC = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(state => {
        return state.contacts.items.filter(item =>
            item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
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