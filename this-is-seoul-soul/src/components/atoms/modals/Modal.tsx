import React from 'react';

interface ModalProps {
  useModal?: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({ useModal, setIsModalOpen, children }: ModalProps) {
  const handleClose = () => {
    if (useModal) {
      setIsModalOpen(false);
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleClose}
      className={`h-full w-full fixed left-0 top-0 flex justify-center items-center z-[10000] transition-opacity bg-black bg-opacity-25`}
    >
      <div
        onClick={stopPropagation}
        className={`w-full rounded-[8px] z-50 transform scale-100 transition-transform bg-white mx-4`}
      >
        {children}
      </div>
    </div>
  );
}
