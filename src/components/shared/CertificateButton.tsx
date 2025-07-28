import { useState } from 'react';
import ImagePopup from './ImagePopup';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
    className = '',
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
            <button
                className="inline-flex items-center gap-1 text-yellow-400 font-bold text-xs uppercase tracking-wider hover:text-white transition-colors duration-200 group/btn cursor-pointer"
                onClick={handleOpenModal}
                type="button"
                aria-label="View Certificate"
            >
                {buttonText}
                <MdKeyboardArrowRight className="text-2xl transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>

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
