import React from "react";
import Star from "./Star";
import avatar from "../../public/avatar.png"

export default function Home() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isfavourite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isfavourite: !prevContact.isfavourite,
    }));
  }

  return (
    <main>
      <article className="card">
        <div className="card--avatar">
        <img src={avatar.src} className="card--image" />
          <Star
            isFilled={contact.isfavourite}
            handleClick={toggleFavorite}
          />
        </div>
        <div className="card--info">
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}