import React from "react";

export default function useInnerSize() {
    const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
    const [innerHeight, setInnerHeight] = React.useState(window.innerHeight);

    const onResize = () => {
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
    }

    React.useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])


    return { innerWidth, innerHeight }
}