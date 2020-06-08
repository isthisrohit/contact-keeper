import React from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {

    const contactContext = React.useContext(ContactContext);
    const { contacts, getContacts, filtered, loading } = contactContext;

    React.useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    },[]);

    if(contacts !== null && contacts.length === 0 && !loading)
    {
        return <h4>Please Add a Contact</h4>
    }
    return (
        <React.Fragment>
            {contacts !== null && !loading ? ( filtered !== null ? filtered.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
            )) : contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
            )) ) : <Spinner />}
        </React.Fragment>
    );
}

export default Contacts;