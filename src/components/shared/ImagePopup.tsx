import { useEffect, useCallback, useState } from 'react';
import { type ReactNode } from 'react';

interface ImagePopupProps {
    isOpen: boolean;
    imageUrl: string;
    imageAlt?: string;
    title?: string;
    onClose: () => void;
    children?: ReactNode;
}

const ImagePopup = ({
    isOpen,
    imageUrl,
    imageAlt = 'Certificate',
    title,
    onClose,
    children,
}: ImagePopupProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
    const [isUsingFallback, setIsUsingFallback] = useState(false);

    // Reset states when imageUrl changes
    useEffect(() => {
        setCurrentImageUrl(imageUrl);
        setIsUsingFallback(false);
        setHasError(false);
        if (isOpen) {
            setIsLoading(true);
        }
    }, [imageUrl, isOpen]);

    // Handle escape key press
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        },
        [isOpen, onClose]
    );

    // Handle click outside modal
    const handleBackdropClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        [onClose]
    );

    // Handle image load
    const handleImageLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
    }, []);

    // Handle image error - try fallback image first
    const handleImageError = useCallback(() => {
        if (!isUsingFallback) {
            // Try fallback image
            setIsUsingFallback(true);
            setCurrentImageUrl('/logo.png');
            setIsLoading(true); // Show loading while fallback loads
        } else {
            // Fallback also failed
            setIsLoading(false);
            setHasError(true);
        }
    }, [isUsingFallback]);

    // Body scroll lock when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px'; // Prevent layout shift
            document.addEventListener('keydown', handleKeyDown);
            // Reset image states when modal opens
            setIsLoading(true);
            setHasError(false);
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
            aria-describedby="modal-image"
        >
            <div className="relative max-w-4xl max-h-[90vh] bg-gray-800 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Close modal"
                    type="button"
                >
                    <i
                        className="fa-solid fa-times text-lg"
                        aria-hidden="true"
                    ></i>
                </button>

                {/* Title */}
                {title && (
                    <div className="px-6 py-4 border-b border-gray-700">
                        <h3
                            id="modal-title"
                            className="text-xl font-bold text-white"
                        >
                            {title}
                        </h3>
                    </div>
                )}

                {/* Loading State */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center p-12 text-gray-light">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p>Loading certificate...</p>
                    </div>
                )}

                {/* Error State */}
                {hasError && !isLoading && (
                    <div className="flex flex-col items-center justify-center p-12 text-red-400">
                        <i className="fa-solid fa-exclamation-triangle text-4xl mb-4"></i>
                        <p className="text-center mb-2">
                            Certificate image not available
                        </p>
                        <p className="text-sm text-gray-400 text-center">
                            The certificate image could not be loaded at this
                            time.
                        </p>
                    </div>
                )}

                {/* Image */}
                <div className="relative">
                    <img
                        id="modal-image"
                        src={currentImageUrl}
                        alt={
                            isUsingFallback
                                ? 'Logo (Certificate not available)'
                                : imageAlt
                        }
                        className={`max-w-full max-h-[70vh] object-contain ${isLoading || hasError ? 'hidden' : 'block'}`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />

                    {/* Fallback indicator */}
                    {isUsingFallback && !isLoading && !hasError && (
                        <div className="absolute bottom-4 left-4 bg-yellow-400/90 text-black px-3 py-1 rounded text-sm">
                            <i className="fa-solid fa-info-circle mr-2"></i>
                            Certificate image not available - showing logo
                        </div>
                    )}
                </div>

                {/* Additional content */}
                {children && !isLoading && !hasError && (
                    <div className="px-6 py-4 border-t border-gray-700 bg-gray-800/50">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePopup;
