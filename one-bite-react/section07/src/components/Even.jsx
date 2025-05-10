import {useEffect} from "react";

const Even = () => {
    useEffect(() => {
        return () => {
            // 클린업
            console.log('Even unmount');
        };
    }, []);

    return (
        <div>Even</div>
    )
}

export default Even;