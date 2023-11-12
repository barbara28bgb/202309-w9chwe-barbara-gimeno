import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import ContactsListStyled from "./ContactsListStyled";
import contactsMock from "../../mocks/contactsMock";

const ContactsList = (): React.ReactElement => {
  return (
    <ContactsListStyled>
      {contactsMock.map((contact) => (
        <li key={contact.id}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </ContactsListStyled>
  );
};

export default ContactsList;
