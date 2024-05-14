import React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../redux/contactsSlice";
import styles from './ContactForm.module.css';

export const ContactForm: React.FC = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newObj = {
            id: nanoid(),
            name: e.target.elements.name.value,
            number: e.target.elements.number.value,
        };
        dispatch(addContact(newObj));
        e.target.reset();
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
                    type="tel"
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