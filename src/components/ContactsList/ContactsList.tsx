import ContactCard from "../ContactCard/ContactCard";
import ContactsListStyled from "./ContactsListStyled";
import { useAppSelector } from "../../store/hooks";

const ContactsList = (): React.ReactElement => {
  const contacts = useAppSelector((state) => {
    return state.contactsState.contacts;
  });

  return (
    <ContactsListStyled>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </ContactsListStyled>
  );
};

export default ContactsList;
