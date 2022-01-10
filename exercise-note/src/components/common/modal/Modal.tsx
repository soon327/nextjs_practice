import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const BackModal = styled.div<{ open: Boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`;

const showModal = keyframes`
  from {
    opacity: 0.5;
    transform: translate(-50%, -40%);
  }
  to{
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;
const Container = styled.div`
  transform: translate(-50%, -50%);
  z-index: 3;
  animation: ${showModal} 0.5s forwards;
`;

export interface ModalProps {
  open: Boolean;
  children?: ReactNode;
}

export default function Modal({ open, children }: ModalProps) {
  return (
    <BackModal open={open}>
      <Container className={`w-2/5 h-4/6 border-2 border-lime-700 ${open ? 'flex' : 'hidden'} absolute top-1/2 left-1/2 bg-slate-200  `}>
        {children}
      </Container>
    </BackModal>
  );
}
