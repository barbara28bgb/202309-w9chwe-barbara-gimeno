import { ContactStructure } from "../store/types";
import MovieCardStyled from "./ContactCardStyled";

interface ContactCardProps {
  contact: ContactStructure;
}

const ContactCard = ({
  contact: { name, yearOfBirth, isFriend, image },
}: ContactCardProps): React.ReactElement => {
  return (
    <MovieCardStyled>
      <img
        className="contact-container__image"
        src={image}
        alt={name}
        width="260"
        height="260"
      />
      <span className="contact-container__name"> {name}</span>
      <span className="contact-container__year">{yearOfBirth}</span>
      <span className="contact-container__isFriend">{isFriend}</span>
    </MovieCardStyled>
  );
};

export default ContactCard;
