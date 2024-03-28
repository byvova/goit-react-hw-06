import { Contact } from "../Contact/Contact"

export const ContactList = ({ data, handlerButton }) => {
    return (
        <div>
            {data.map(contact => (
                <Contact key={contact.id} contact={contact} handlerButton={handlerButton} />
            ))}
        </div>
    )
}
