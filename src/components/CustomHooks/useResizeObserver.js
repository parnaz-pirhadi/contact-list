import { useEffect, useRef, useState } from 'react';

const useResizeObserver = () => {
    const [frequentlyVisitedContactHeight, setFrequentlyVisitedContactHeight] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        if(!headerRef.current) return ;

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === headerRef.current) {
                    const frequentlyVisitedContactHeight = entry.target.offsetHeight;
                    setFrequentlyVisitedContactHeight(frequentlyVisitedContactHeight);
                }
            }
        });

        resizeObserver.observe(headerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return { headerRef, frequentlyVisitedContactHeight };
};

export default useResizeObserver;
