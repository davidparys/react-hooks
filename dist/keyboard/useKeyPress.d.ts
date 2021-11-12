/**
 * This hook makes it easy to detect when the user is pressing a specific key on their keyboard.
 * The recipe is fairly simple, as I want to show how little code is required, but I challenge any readers
 *  to create a more advanced version of this hook. Detecting when multiple keys are held down at the same
 * time would be a nice addition. Bonus points: also require they be held down in a specified order
 *
 */
export declare const useKeyPress: (targetKey: string) => boolean;
