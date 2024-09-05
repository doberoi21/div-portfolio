// import React from 'react'

function ContactCard({ contact }) {
  return (
    <a className="contact-card-container" href={contact.link}>
      <img src={contact.icon} className="contact-icons" />
      <h2>{contact.label}</h2>
      <h4>{contact.description}</h4>
    </a>
  );
}

export default ContactCard;
