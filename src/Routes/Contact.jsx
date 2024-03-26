import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Form from "../Components/Form";

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={`contactBox ${theme}`}>
      <h1>Ponte en contacto con nosotros</h1>
      <p>Deja acá tus datos y te contáctaremos a la brevedad</p>
      <Form />
    </div>
  );
};

export default Contact;
