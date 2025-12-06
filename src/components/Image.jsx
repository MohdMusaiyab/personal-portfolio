"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const images = [
    "./personal1.jpg",
    "./personal2.png",
    "./personal3.jpeg",
    "./personal4.jpeg",
    "./personal5.jpeg",
];

const SPEED = 90; // pixels per second (Constant speed)

const ImageSlider = () => {
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    // State to hold the dynamically measured width of one slide
    const [measuredSlideWidth, setMeasuredSlideWidth] = useState(0);

    // --- 1. Measurement and Resizing Logic ---
    const updateDimensions = () => {
        if (containerRef.current) {
            // Get the actual computed width of the container (one slide width)
            setMeasuredSlideWidth(containerRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        // Initial measurement
        updateDimensions();

        // Listen for window resize events
        window.addEventListener('resize', updateDimensions);
        
        return () => {
            // Cleanup listener
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);
    // ------------------------------------------

    // --- 2. Animation Logic (using dynamic width) ---
    useAnimationFrame((time, delta) => {
        if (measuredSlideWidth === 0) return; // Wait until width is measured

        // Move right continuously
        x.set(x.get() - (SPEED * delta) / 1000);
        
        // Reset position when we've moved one full set of images
        const resetPoint = -measuredSlideWidth * images.length;
        
        if (x.get() <= resetPoint) {
            // Reset to 0 to maintain the loop
            x.set(0); 
        }
    });
    // ------------------------------------------

    return (
        // The outer div maintains the full width but respects horizontal padding
        <div className="w-full">
            <div
                ref={containerRef}
                className="relative overflow-hidden mx-auto"
                // Responsive Styling: 
                // max-w-sm and lg:max-w-md control max width.
                // aspect-ratio controls height relative to width.
                style={{
                    width: `min(100%, 500px)`, // Max width of 500px, but always responsive to parent
                    aspectRatio: '5 / 3', // Maintain a 5:3 ratio (e.g., 500/300)
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
            >
                {/* Only render content once the width is measured */}
                {measuredSlideWidth > 0 && (
                    <motion.div
                        className="flex h-full"
                        style={{ 
                            x,
                            // Total width is 2x the number of slides * the measured slide width
                            width: `${images.length * 2 * measuredSlideWidth}px`,
                        }}
                    >
                        {/* Render images twice for seamless loop */}
                        {[...images, ...images].map((src, index) => (
                            <div 
                                key={index} 
                                // Each slide's width is the measured width
                                style={{ 
                                    minWidth: `${measuredSlideWidth}px`, 
                                    height: '100%',
                                    flexShrink: 0
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${index % images.length + 1}`}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ImageSlider;