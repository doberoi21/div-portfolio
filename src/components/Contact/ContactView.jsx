// import React from 'react'
import "./style/Contact.css";
import { contactData } from "./ContactData";
import ContactCard from "./ContactCard";
import ProfileImg from '../../assets/Home/profile.png';
import HeadingSection from "../Heading-Section";

function ContactView() {
  return (
    <section id="contact">
      <div className="contact-view-container">
        <HeadingSection sectionName={"Contact"} />
        <p className="contact-subhead">
          Let's get in touch and build something together :){" "}
        </p>
        <div className="contact-view">
          <div className="contact-card">
            {contactData.map((contact) => (
              <ContactCard contact={contact} key={contact.id} />
            ))}
          </div>
          <div>
          <img src={ProfileImg} className="contact-img" />
          </div>
        </div>
        <div className="contact-footer">
          <p> © All Right Reserved by Divyanshi Oberoi</p>
        </div>
      </div>
    </section>
  );
}

export default ContactView;
