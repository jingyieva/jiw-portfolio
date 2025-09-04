// src/components/MotionInView.tsx
import { useEffect, useState } from "react";

export default function MotionInView(props) {
    const [M, setM] = useState(null);
    useEffect(() => { 
        import("framer-motion").then(setM); }
    , []);
    if (!M) {
        return <div>{props.children}</div>;
    }
    const { motion } = M;
    
    return (
        <motion.div
            style={{ willChange: "opacity, transform" }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            {...props}
        />
    );
}
