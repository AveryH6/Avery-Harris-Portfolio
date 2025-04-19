import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 50%;
  margin: 4rem;
  padding-top: 2rem;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--ah-babyyellow);
  border-radius: 5px;
  background-color: #ffffff11;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--ah-babyyellow);
  background-color: #ffffff11;
  border-radius: 5px;
  height: 150px;
  resize: none;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: var(--ah-darkgrey);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--ah-white);
    color: var(--ah-darkgrey)
  }
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:harrisae143@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (Email: ${formData.email})`;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;