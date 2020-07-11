import useEventHandler from "./useEventHandler";
import {useCallback} from "react";

export default function useOutsideClickHandler(onOutsideClick, element) {
    const handleOutsideClick = useCallback((event) => {
        if (element.current && !element.current.contains(event.target)) {
            onOutsideClick(event);
        }
    }, [element, onOutsideClick]);

    useEventHandler("mousedown", handleOutsideClick, element.current);
}