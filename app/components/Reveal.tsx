'use client';
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    userX?: number,
    duration?: number
    delay?: number
    y?: number | false
}

export default function Reveal({ children, width = "fit-content", userX = 100, duration = 0.5, delay = 0.25, y = false }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation()
    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    let hidden: any = {opacity: 0}
    let visible: any = {opacity: 1}
    if(!!y) {
        visible.y = 0
        hidden.y = y;
    } else {
        hidden.x = userX;
        visible.x = 0
    }
    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{ hidden, visible }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>
        </div>
    )
};