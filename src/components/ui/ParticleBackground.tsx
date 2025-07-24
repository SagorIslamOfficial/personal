import { useEffect, useRef, useState, useCallback } from 'react';

// Declare global Particles type
declare global {
    interface Window {
        Particles: {
            init: (config: ParticleConfig) => ParticleInstance;
        };
    }
}

interface ParticleConfig {
    selector: string;
    color: string;
    maxParticles: number;
    sizeVariations: number;
    connectParticles?: boolean;
    responsive?: Array<{
        breakpoint: number;
        options: Partial<ParticleConfig>;
    }>;
}

interface ParticleInstance {
    destroy: () => void;
    pauseAnimation: () => void;
    resumeAnimation: () => void;
}

interface ParticleBackgroundProps {
    className?: string;
    disabled?: boolean;
    performanceMode?: 'auto' | 'high' | 'low' | 'disabled';
}

const ParticleBackground = ({
    className = '',
    disabled = false,
    performanceMode = 'auto',
}: ParticleBackgroundProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const particleInstanceRef = useRef<ParticleInstance | null>(null);
    const performanceTimerRef = useRef<NodeJS.Timeout | null>(null);
    const frameCountRef = useRef(0);
    const lastTimeRef = useRef(Date.now());

    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentPerformanceMode, setCurrentPerformanceMode] =
        useState(performanceMode);
    const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);

    // Performance detection
    const detectDevicePerformance = useCallback(() => {
        const canvas = document.createElement('canvas');
        const gl =
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl');

        // Check for various performance indicators
        const indicators = {
            // Hardware concurrency (CPU cores)
            cores: navigator.hardwareConcurrency || 1,
            // WebGL support
            webgl: !!gl,
            // Memory (if available)
            memory: (navigator as any).deviceMemory || 4,
            // Connection type (if available)
            connection: (navigator as any).connection?.effectiveType || '4g',
            // Reduced motion preference
            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
                .matches,
        };

        // Calculate performance score
        let score = 0;
        if (indicators.cores >= 4) score += 2;
        else if (indicators.cores >= 2) score += 1;

        if (indicators.webgl) score += 2;
        if (indicators.memory >= 8) score += 2;
        else if (indicators.memory >= 4) score += 1;

        if (indicators.connection === '4g') score += 1;
        if (indicators.reducedMotion) score -= 3;

        return {
            score,
            isLowPerformance: score < 3,
            indicators,
        };
    }, []);

    // Get optimized particle configuration based on performance
    const getParticleConfig = useCallback(
        (mode: string, screenWidth: number): ParticleConfig => {
            let maxParticles = 100;
            let sizeVariations = 1.5;

            // Adjust based on performance mode
            switch (mode) {
                case 'high':
                    maxParticles = 150;
                    sizeVariations = 2.0;
                    break;
                case 'low':
                    maxParticles = 30;
                    sizeVariations = 1.0;
                    break;
                case 'auto':
                    if (isLowPerformanceDevice) {
                        maxParticles = 40;
                        sizeVariations = 1.0;
                    }
                    break;
            }

            // Responsive adjustments
            if (screenWidth <= 480) {
                maxParticles = Math.floor(maxParticles * 0.3);
            } else if (screenWidth <= 768) {
                maxParticles = Math.floor(maxParticles * 0.5);
            } else if (screenWidth <= 1024) {
                maxParticles = Math.floor(maxParticles * 0.7);
            }

            return {
                selector: '.background',
                color: '#ffc107',
                maxParticles,
                sizeVariations,
                connectParticles: mode !== 'low',
                responsive: [
                    {
                        breakpoint: 768,
                        options: {
                            maxParticles: Math.floor(maxParticles * 0.5),
                            sizeVariations: Math.max(sizeVariations * 0.8, 1.0),
                        },
                    },
                    {
                        breakpoint: 480,
                        options: {
                            maxParticles: Math.floor(maxParticles * 0.3),
                            sizeVariations: 1.0,
                        },
                    },
                ],
            };
        },
        [isLowPerformanceDevice]
    );

    // Performance monitoring
    const startPerformanceMonitoring = useCallback(() => {
        if (performanceTimerRef.current) {
            clearInterval(performanceTimerRef.current);
        }

        performanceTimerRef.current = setInterval(() => {
            const now = Date.now();
            const deltaTime = now - lastTimeRef.current;

            if (deltaTime >= 1000) {
                // Check every second
                const fps = (frameCountRef.current * 1000) / deltaTime;

                // If FPS drops below 30, switch to low performance mode
                if (fps < 30 && currentPerformanceMode === 'auto') {
                    console.warn(
                        'Low FPS detected, switching to low performance mode'
                    );
                    setCurrentPerformanceMode('low');
                    setIsLowPerformanceDevice(true);
                }

                frameCountRef.current = 0;
                lastTimeRef.current = now;
            } else {
                frameCountRef.current++;
            }
        }, 100);
    }, [currentPerformanceMode]);

    const stopPerformanceMonitoring = useCallback(() => {
        if (performanceTimerRef.current) {
            clearInterval(performanceTimerRef.current);
            performanceTimerRef.current = null;
        }
    }, []);

    // Initialize performance detection
    useEffect(() => {
        if (performanceMode === 'auto') {
            const performance = detectDevicePerformance();
            setIsLowPerformanceDevice(performance.isLowPerformance);

            if (performance.indicators.reducedMotion) {
                setCurrentPerformanceMode('disabled');
            } else if (performance.isLowPerformance) {
                setCurrentPerformanceMode('low');
            }
        } else {
            setCurrentPerformanceMode(performanceMode);
        }
    }, [performanceMode, detectDevicePerformance]);

    useEffect(() => {
        if (disabled || currentPerformanceMode === 'disabled') {
            return;
        }

        const initParticles = async () => {
            try {
                // Get optimized configuration
                const screenWidth = window.innerWidth;
                const config = getParticleConfig(
                    currentPerformanceMode,
                    screenWidth
                );

                // Wait for particles.js to be available
                if (typeof window !== 'undefined' && window.Particles) {
                    const instance = window.Particles.init(config);
                    particleInstanceRef.current = instance;
                    setIsLoaded(true);
                    setHasError(false);

                    // Start performance monitoring for auto mode
                    if (currentPerformanceMode === 'auto') {
                        startPerformanceMonitoring();
                    }
                } else {
                    // Try to load particles.js dynamically
                    await loadParticlesJS();
                    if (window.Particles) {
                        const instance = window.Particles.init(config);
                        particleInstanceRef.current = instance;
                        setIsLoaded(true);
                        setHasError(false);

                        // Start performance monitoring for auto mode
                        if (currentPerformanceMode === 'auto') {
                            startPerformanceMonitoring();
                        }
                    } else {
                        throw new Error('Particles.js failed to load');
                    }
                }
            } catch (error) {
                console.warn('Particles.js failed to initialize:', error);
                setHasError(true);
                setIsLoaded(false);
            }
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(initParticles, 100);

        return () => {
            clearTimeout(timer);
            stopPerformanceMonitoring();
        };
    }, [
        disabled,
        currentPerformanceMode,
        getParticleConfig,
        startPerformanceMonitoring,
        stopPerformanceMonitoring,
    ]);

    // Cleanup particles when component unmounts
    useEffect(() => {
        return () => {
            stopPerformanceMonitoring();
            if (particleInstanceRef.current) {
                try {
                    particleInstanceRef.current.destroy();
                } catch (error) {
                    console.warn('Error destroying particles:', error);
                }
                particleInstanceRef.current = null;
            }
        };
    }, [stopPerformanceMonitoring]);

    // Handle window resize for responsive behavior
    useEffect(() => {
        if (disabled || !isLoaded || currentPerformanceMode === 'disabled')
            return;

        const handleResize = () => {
            if (particleInstanceRef.current) {
                // Restart particles with appropriate config for new screen size
                try {
                    const screenWidth = window.innerWidth;
                    const config = getParticleConfig(
                        currentPerformanceMode,
                        screenWidth
                    );

                    particleInstanceRef.current.destroy();
                    const instance = window.Particles.init(config);
                    particleInstanceRef.current = instance;
                } catch (error) {
                    console.warn(
                        'Error reinitializing particles on resize:',
                        error
                    );
                }
            }
        };

        let resizeTimer: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 250);
        };

        window.addEventListener('resize', debouncedResize);
        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(resizeTimer);
        };
    }, [isLoaded, disabled, currentPerformanceMode, getParticleConfig]);

    // Function to dynamically load particles.js
    const loadParticlesJS = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (window.Particles) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = '/js/particles.min.js';
            script.async = true;
            script.onload = () => {
                // Give particles.js time to initialize
                setTimeout(() => {
                    if (window.Particles) {
                        resolve();
                    } else {
                        reject(
                            new Error(
                                'Particles.js not available after loading'
                            )
                        );
                    }
                }, 100);
            };
            script.onerror = () =>
                reject(new Error('Failed to load particles.js'));
            document.head.appendChild(script);
        });
    };

    if (disabled || currentPerformanceMode === 'disabled') {
        return null;
    }

    return (
        <div
            ref={containerRef}
            className={`particle-background ${className}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        >
            <canvas
                className="background"
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                }}
            />
            {hasError && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'rgba(255, 193, 7, 0.3)',
                        fontSize: '0.875rem',
                        textAlign: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    Background animation unavailable
                </div>
            )}
            {/* Performance indicator (only in development) */}
            {process.env.NODE_ENV === 'development' && isLoaded && (
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: 'rgba(255, 193, 7, 0.7)',
                        fontSize: '0.75rem',
                        background: 'rgba(0, 0, 0, 0.5)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        pointerEvents: 'none',
                    }}
                >
                    Particles: {currentPerformanceMode}
                    {isLowPerformanceDevice && ' (low-perf detected)'}
                </div>
            )}
        </div>
    );
};

export default ParticleBackground;
