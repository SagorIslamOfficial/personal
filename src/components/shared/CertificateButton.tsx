import { useState } from 'react';
import ImagePopup from './ImagePopup';
import Button from './Button';

interface CertificateButtonProps {
  certificateImage: string;
  certificateAlt?: string;
  buttonText?: string;
  className?: string;
}

const CertificateButton = ({
  certificateImage,
  certificateAlt = 'Certificate',
  buttonText = 'Certificate',
  className = ''
}: CertificateButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`certificate-button-container ${className}`}>
      <Button
        variant="outline"
        onClick={handleOpenModal}
        icon={<i className="fa-solid fa-chevron-right"></i>}
        iconPosition="right"
      >
        {buttonText}
      </Button>

      <ImagePopup
        isOpen={isModalOpen}
        imageUrl={certificateImage}
        imageAlt={certificateAlt}
        title="Certificate"
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CertificateButton;