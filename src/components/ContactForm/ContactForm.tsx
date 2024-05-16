import React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactsSlice";
import styles from './ContactForm.module.css';

interface ContactFormProps { }

export const ContactForm: React.FC<ContactFormProps> = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            elements: {
                name: { value: string };
                number: { value: string };
            };
        };

        const newObj = {
            id: nanoid(),
            name: target.elements.name.value,
            number: target.elements.number.value,
        };
        dispatch(addContact(newObj));
        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                <input
                    className={styles.inputField}
                    placeholder="Name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>

            <label>
                <input
                    className={styles.inputField}
                    placeholder="Phone number"
                    type="number"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>

            <button type="submit" className={styles.button}>
                Add Contact
            </button>
        </form>
    )
}