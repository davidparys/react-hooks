"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLockBodyScroll = void 0;
const react_1 = require("react");
// DESCRIPTION
/**
 * Sometimes you want to prevent your users from being able to scroll the body of your page while a particular component is absolutely positioned
 *  over your page (think modal or full-screen mobile menu). It can be confusing to see the background content scroll underneath a modal,
 * especially if you intended to scroll an area within the modal. Well, this hook solves that! Simply call the useLockBodyScroll hook in any
 *  component and body scrolling will be locked until that component unmounts.
 */
// Usage
//  function App() {
//    // State for our modal
//    const [modalOpen, setModalOpen] = useState<boolean>(false);
//    return (
//      <div>
//        <button onClick={() => setModalOpen(true)}>Show Modal</button>
//        <Content />
//        {modalOpen && (
//          <Modal
//            title="Try scrolling"
//            content="I bet you you can't! Muahahaha 😈"
//            onClose={() => setModalOpen(false)}
//          />
//        )}
//      </div>
//    );
//  }
//  // Define modal props type
//  type ModalProps = {
//    title: string;
//    content: string;
//    onClose: () => void;
//  }
//  function Modal({ title, content, onClose } : ModalProps) {
//    // Call hook to lock body scroll
//    useLockBodyScroll();
//    return (
//      <div className="modal-overlay" onClick={onClose}>
//        <div className="modal">
//          <h2>{title}</h2>
//          <p>{content}</p>
//        </div>
//      </div>
//    );
//  }
// Hook
const useLockBodyScroll = () => {
    // useLaoutEffect callback return type is "() => void" type
    (0, react_1.useLayoutEffect)(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
};
exports.useLockBodyScroll = useLockBodyScroll;
