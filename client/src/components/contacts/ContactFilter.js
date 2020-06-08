import React from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = React.useContext(ContactContext);
    const text = React.useRef('');
    const { filterContacts, clearFilter, filtered } = contactContext;

    React.useEffect(() => {
        if(filtered === null)
        {
            text.current.value = '';
        }
    });

    const onChange = (e) => {
        if(text.current.value !== '')
        {
            filterContacts(e.target.value);
        }
        else
        {
            clearFilter();
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange} />
        </form>
    );
}

export default ContactFilter;