import React from 'react';
import * as S from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.Container>
      <S.Modal>
        <S.Content>
          {children}
        </S.Content>
      </S.Modal>
    </S.Container>
  );
};

export default Modal;
