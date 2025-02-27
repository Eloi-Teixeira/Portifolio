import React from 'react';
import Input from './Input';
import { SubmitMessageStatus } from './feedback/SubmitMessage.tsx';

const Contact = () => {
  const maxLength = 2000;
  const [lengthLeft, setLengthLeft] = React.useState(maxLength);
  const [message, setMessage] = React.useState<SubmitMessageStatus>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const messageTime = 3000;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data, e.currentTarget);

    // Implementar o envio do formulário aqui
    // Exemplo de envio de dados para uma API fictícia
    try {
      setIsLoading(true);
      const response = await fetch('https://data.origamid.dev/vendas/');
      if (!response.ok) {
        throw new Error(
          'Erro ao enviar a mensagem. Tente novamente mais tarde.',
        );
      }
      setMessage('success');
    } catch (error) {
      setMessage('error');
      return;
    } finally {
      setIsLoading(false);
    }
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
              id="name"
              placeholder="Nome"
              autoComplete="off"
              validationType="name"
            />
            <Input
              label="Email"
              id="email"
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
    </section>
  );
};

export default Contact;
