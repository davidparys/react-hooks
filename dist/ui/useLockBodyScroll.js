"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLockedBodyScroll = void 0;
const react_1 = require("react");
function useLockedBodyScroll(initialLocked = false) {
    const [locked, setLocked] = (0, react_1.useState)(initialLocked);
    // Do the side effect before render
    (0, react_1.useLayoutEffect)(() => {
        if (!locked) {
            return;
        }
        // Save initial body style
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;
        // Lock body scroll
        document.body.style.overflow = "hidden";
        // Get the scrollBar width
        const root = document.getElementById("root"); // or root
        const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;
        // Avoid width reflow
        if (scrollBarWidth) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }
        return () => {
            document.body.style.overflow = originalOverflow;
            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
            }
        };
    }, [locked]);
    // Update state if initialValue changes
    (0, react_1.useEffect)(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked]);
    return [locked, setLocked];
}
exports.useLockedBodyScroll = useLockedBodyScroll;
