/**
 * Sometimes you want to prevent your users from being able to scroll the body of your page while a particular component is absolutely positioned
 *  over your page (think modal or full-screen mobile menu). It can be confusing to see the background content scroll underneath a modal,
 * especially if you intended to scroll an area within the modal. Well, this hook solves that! Simply call the useLockBodyScroll hook in any
 *  component and body scrolling will be locked until that component unmounts.
 */
export declare const useLockBodyScroll: () => void;
