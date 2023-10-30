import { useEffect, useRef, useState } from 'react';

function useOnScreen(options)
{
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef();

    useEffect(() =>
    {
        const observer = new IntersectionObserver(([entry]) =>
        {
            setIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () =>
        {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isIntersecting];
}

export default useOnScreen;
