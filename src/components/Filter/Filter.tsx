import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";
import styles from './Filter.module.css';
import { RootState } from "../../redux/store";

interface FilterProps { }

export const Filter: React.FC<FilterProps> = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.filter.filterValue);

    const showFilteredContacts = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterContacts(e.target.value));
    };

    return (
        <div>
            <label>
                <input
                    type="text"
                    placeholder="Find contacts by name..."
                    value={filter}
                    onChange={showFilteredContacts}
                    className={styles.inputField}
                />
            </label>
        </div>
    );
};