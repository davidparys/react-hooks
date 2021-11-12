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
