import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Button, Container, Form } from 'react-bootstrap';

export const ContactForm = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState("")
  const [alertVariant, setAlertVariant] = useState("success")

  const closeAlert = () => {
    setAlertMessage("");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    try {
        emailjs.sendForm(
            'service_rt7y9jg', 
            'template_pq7bjqt', 
            form.current, 
            'O7wpMPy0PZp4m3QtG')
            .then(() => {
                setAlertMessage('Mensaje enviado')
                setAlertVariant('success')})
                setTimeout(() => {
                    form.current.reset();
                }, 2000)
    } catch (error) {
        setAlertMessage('Error al enviar el mensaje')
        setAlertVariant('danger')
    }
  };

  return (
    <section className='formulario'>
        <Container>
            <h1 className='text-center m-4 display-1'>NECESITAS ASESORIA!</h1>
            {alertMessage && (
                <Alert variant={alertVariant} onClose={closeAlert} dismissible>
                    <Alert.Heading style={{fontSize: '0.8rem'}}>{alertMessage}</Alert.Heading>
                </Alert>
                )}
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre de la Empresa: </Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre..." name='user_name'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Correo Electronico: </Form.Label>
                    <Form.Control type="email" placeholder="suempresa@empresa.com" name='user_email'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Telefono: </Form.Label>
                    <Form.Control type="text" placeholder="Telefono" name='user_phone'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Mensaje:</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Ejm. Estoy interesado en..."
                        style={{ height: '100px' }}
                        name='message' />
                </Form.Group>
                <div className='d-grid'>
                    <Button className='mb-3' variant='info' type='submit' size='lg'>
                        Enviar
                    </Button>
                </div>
            </Form>
        </Container>
    </section>
  );
};


