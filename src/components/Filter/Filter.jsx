import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../Contacts/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <label>
      Search contacts:
      <input
        className={styles.filter}
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
