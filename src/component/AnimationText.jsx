import { useState, useRef, useEffect } from "react"

export default function AnimationText({text, delay, className = ""}){
    const element = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setShow(true);
                    observer.unobserve(element.current);
                }
            },
            {
                threshold: 1,
            }
        );

        if(element.current){
            observer.observe(element.current)
        }

        return () => {
            if(element.current){
                observer.unobserve(element.current);
            }
        };
    },[]);



    return (
        <>
            <div ref={element} className="overflow-hidden">
                <p className={`translate-y-full ${show ? `animate-reveal delay-${delay}` : ""} ${className}`}>{text}</p>
            </div>
        </>
    )
}