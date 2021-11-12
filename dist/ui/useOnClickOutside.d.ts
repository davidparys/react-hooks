/**
 * This hook allows you to detect clicks outside of a specified element.
 *  In the example below we use it to close a modal when any element outside of the modal is clicked.
 *  By abstracting this logic out into a hook we can easily use it across all of our components that need this kind of functionality (dropdown menus, tooltips, etc).
 */
declare const MOUSEDOWN = "mousedown";
declare const TOUCHSTART = "touchstart";
declare type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];
declare type HandledEventsType = HandledEvents[number];
declare type PossibleEvent = {
    [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];
declare type Handler = (event: PossibleEvent) => void;
export declare const useOnClickOutside: (ref: React.RefObject<HTMLElement>, handler: Handler | null) => void;
export {};
