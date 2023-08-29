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
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" d="M0,288L40,282.7C80,277,160,267,240,234.7C320,203,400,149,480,117.3C560,85,640,75,720,80C800,85,880,107,960,101.3C1040,96,1120,64,1200,74.7C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        <section className='formulario'>
        <Container>
            <h2 className='text-center m-2'>NECESITAS ASESORIA!</h2>
            {alertMessage && (
                <Alert variant={alertVariant} onClose={closeAlert} dismissible>
                    <Alert.Heading style={{fontSize: '0.8rem'}}>{alertMessage}</Alert.Heading>
                </Alert>
                )}
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre de la Empresa: </Form.Label>
                    <Form.Control type="text" placeholder="Ejm. Residencias Bahia" name='user_name'/>
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
                    <Button className='mb-3' variant='dark' type='submit' size='lg'>
                        Enviar
                    </Button>
                </div>
            </Form>
        </Container>
    </section>
    </>
  );
};


