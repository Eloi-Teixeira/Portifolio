import React from 'react';

export type SubmitMenssageProps = {
  type: null | 'sucess' | 'error';
};

const SubmitMenssage = ({ type }: SubmitMenssageProps) => {
  if (type === null) {
    return null;
  }

  const menssage =
    type === 'sucess'
      ? 'Mensagem enviada com sucesso!'
      : 'Erro ao enviar a mensagem. Tente novamente mais tarde.';
  const menssageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (menssageRef.current === null) return;

    menssageRef.current.classList.add('show');

    const time = setTimeout(() => {
      menssageRef.current?.classList.remove('show');
      menssageRef.current?.classList.add('hide');
    }, 3000);

    return () => {
      menssageRef.current?.classList.remove('hide');
      clearTimeout(time);
    };
  }, [menssageRef]);

  return (
    <div className={`submit-menssage ${type}`} ref={menssageRef}>
      {menssage}
    </div>
  );
};

export default SubmitMenssage;
