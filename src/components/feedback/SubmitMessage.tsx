import { FC, useEffect, useState } from 'react';
import { SubmitMessageDiv } from './SubmitMessageStyles';

export type SubmitMessageStatus = null | 'success' | 'error';

type SubmitMessageProps = {
  type: SubmitMessageStatus;
  successMessage?: string;
  errorMessage?: string;
  displayTime?: number;
};

const DEFAULT_DISPLAY_TIME = 2500;

const useVisibilityTimer = (active: boolean, duration: number): boolean => {
  const [isVisible, setIsVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [active, duration]);

  return isVisible;
};

const SubmitMessage: FC<SubmitMessageProps> = ({
  type,
  successMessage = 'Mensagem enviada com sucesso!',
  errorMessage = 'Erro ao enviar a mensagem. Tente novamente mais tarde.',
  displayTime = DEFAULT_DISPLAY_TIME,
}) => {
  if (type === null) return null;

  const isVisible = useVisibilityTimer(true, displayTime);
  const message = type === 'success' ? successMessage : errorMessage;

  return (
    <SubmitMessageDiv
      type={type}
      $isVisible={isVisible}

      aria-live="polite"
      role="alert"
    >
      {message}
    </SubmitMessageDiv>
  );
};

const useSubmitMessage: FC<SubmitMessageProps> = ({
  type,
  successMessage,
  errorMessage,
  displayTime = DEFAULT_DISPLAY_TIME,
}: SubmitMessageProps) => {
  const [visibleType, setVisibleType] = useState<SubmitMessageStatus | null>(type);

  useEffect(() => {
    setVisibleType(type);

    console.log(type)
    if (type !== null) {
      const timer = setTimeout(() => {
        console.log(type, visibleType)
        setVisibleType(null);
      }, displayTime * 2);
      return () => clearTimeout(timer);
    }
  }, [type, displayTime]);

  if (visibleType === null) return null;

  return (
    <SubmitMessage
      type={visibleType}
      successMessage={successMessage}
      errorMessage={errorMessage}
      displayTime={displayTime}
    />
  );
};

export { SubmitMessage, useSubmitMessage };
