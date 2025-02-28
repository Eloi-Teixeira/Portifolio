import React from 'react';
import Input from './Input';
import {
  SubmitMessageStatus,
  useSubmitMessage,
} from './feedback/SubmitMessage.tsx';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const maxLength = 2000;
  const [lengthLeft, setLengthLeft] = React.useState(maxLength);
  const [status, setStatus] = React.useState<SubmitMessageStatus>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const messageTime = 3000;
  const FeedBack = useSubmitMessage({ type: status, displayTime: messageTime });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status !== null) {
      setStatus(null);
    }

    setIsLoading(true);

    emailjs
      .sendForm('service_yywrcye', 'template_ygi7p8l', e.currentTarget, {
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
            <Input
              label="Nome"
              name="user_name"
              id="name"
              placeholder="Nome"
              autoComplete="off"
              validationType="name"
            />
            <Input
              label="Email"
              id="email"
              name="user_email"
              placeholder="exemplo@email.com"
              autoComplete="off"
              type="email"
              validationType="email"
            />
            <div>
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                maxLength={maxLength}
                onChange={(e) => {
                  setLengthLeft(maxLength - e.target.value.length);
                }}
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
