"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const images = [
    "./personal1.jpg",
    "./personal2.png",
];

const SLIDE_WIDTH = 500;
const SLIDE_HEIGHT = 300;
const SPEED = 50; // pixels per second

const ImageSlider = () => {
    const x = useMotionValue(0);
    const containerRef = useRef(null);

    useAnimationFrame((time, delta) => {
        // Move right continuously
        x.set(x.get() - (SPEED * delta) / 1000);
        
        // Reset position when we've moved one full set of images
        if (x.get() <= -SLIDE_WIDTH * images.length) {
            x.set(0);
        }
    });

    return (
        <div className="px-4 sm:px-6 md:px-0">
            <div
                ref={containerRef}
                className="relative overflow-hidden mx-auto"
                style={{
                    width: `min(${SLIDE_WIDTH}px, calc(100vw - 2rem))`,
                    height: `${SLIDE_HEIGHT}px`,
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
            >
                <motion.div
                    className="flex"
                    style={{ 
                        x,
                        width: `${images.length * 2 * SLIDE_WIDTH}px`,
                    }}
                >
                    {/* Render images twice for seamless loop */}
                    {[...images, ...images].map((src, index) => (
                        <div 
                            key={index} 
                            style={{ 
                                minWidth: `${SLIDE_WIDTH}px`, 
                                height: `${SLIDE_HEIGHT}px`,
                                flexShrink: 0
                            }}
                        >
                            <img
                                src={src}
                                alt={`Slide ${index % images.length + 1}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ImageSlider;