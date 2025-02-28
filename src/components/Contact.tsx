import React, { use } from 'react';
import Input from './Input';
import {
  SubmitMessageStatus,
  useSubmitMessage,
} from './feedback/SubmitMessage.tsx';
import emailjs from '@emailjs/browser';
import useForm from '../hooks/useForm.tsx';

const Contact = () => {
  const maxLength = 2000;
  const messageTime = 3000;

  const [lengthLeft, setLengthLeft] = React.useState(maxLength);
  const [status, setStatus] = React.useState<SubmitMessageStatus>(null);
  const [message, setMessage] = React.useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);

  const FeedBack = useSubmitMessage({
    type: status,
    displayTime: messageTime,
    errorMessage: message,
  });

  const name = useForm('name');
  const email = useForm('email');
  const messageInput = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageInput.current === null) return;
    if (status !== null) {
      setStatus(null);
      setMessage(undefined);
    }

    if (!name.validate() || !email.validate() || messageInput.current.value.length === 0) {
      setStatus('error');
      setMessage('Preencha todos os campos corretamente');
      return;
    }

    const templateParams = {
      name: name.value,
      email: email.value,
      message: messageInput.current.value,
    };

    setIsLoading(true);

    emailjs
      .send('service_yywrcye', 'template_ygi7p8l', templateParams, {
        publicKey: 'PbxMa-3Z3FarcZ-p1',
        limitRate: {
          id: 'app',
          throttle: 5000,
        },
      })
      .then((result) => {
        console.log('Email enviado com sucesso:', result.text);
        setStatus('success');
      })
      .catch((error) => {
        console.error('Erro ao enviar o email:', error);
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
        name.clear();
        email.clear();
        if (messageInput.current) messageInput.current.value = '';
        setLengthLeft(maxLength);
      });
  };

  return (
    <section id="contact">
      <div className="max-container contact-container">
        <h2>
          Contato
          <div className="title-details">
            <span className="long-bar"></span>
            <div>
              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>
            </div>
          </div>
        </h2>
        <div className="contact-content">
          <div className="contact-text">
            <h3>Vamos trabalhar juntos?</h3>
            <p>
              Tem um projeto em mente ou quer bater um papo sobre tecnologia e
              design? Estou sempre aberto a novas oportunidades, colaborações e
              desafios interessantes.
            </p>
            <ul>
              <li>
                Email: <a href="">eloi.tg1@gmail.com</a>
              </li>
              <li>
                GitHub: <a href="">Elói Teixeira</a>
              </li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>
              Envie uma <span>Mensagem</span>
            </h3>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                onChange={name.onChange}
                onBlur={name.onBlur}
                value={name.value}
                placeholder="Nome"
                autoComplete="off"
              />
              {name.error && <p className="error">{name.error}</p>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                onChange={email.onChange}
                onBlur={email.onBlur}
                value={email.value}
                placeholder="exemplo@email.com"
                autoComplete="off"
              />
              {email.error && <p className="error">{email.error}</p>}
            </div>
            <div>
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                maxLength={maxLength}
                onChange={(e) => {
                  setLengthLeft(maxLength - e.target.value.length);
                }}
                ref={messageInput}
                placeholder="Escreva sua mensagem aqui..."
                autoComplete="on"
                required
              ></textarea>
              <span className="characters-left">{lengthLeft}</span>
            </div>
            <button className={isLoading ? 'loading' : ''} disabled={isLoading}>
              {isLoading ? (
                <>
                  <span>
                    Carregando
                    <div className="dots">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </span>
                </>
              ) : (
                'Enviar'
              )}
            </button>
          </form>
        </div>
      </div>
      {FeedBack}
    </section>
  );
};

export default Contact;
