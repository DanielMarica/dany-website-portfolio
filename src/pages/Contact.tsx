import React from 'react';

type ContactProps = {
  title: string;
};

const Contact: React.FC<ContactProps> = ({ title }) => (
  <h1>{title}</h1>
);

export default Contact;