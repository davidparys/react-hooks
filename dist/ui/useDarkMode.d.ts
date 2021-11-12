/**
 *
 * This hook handles all the stateful logic required to add a ☾ dark mode toggle to your website.
 * It utilizes localStorage to remember the user's chosen mode, defaults to their browser or OS level setting using the prefers-color-scheme media query and
 *  manages the setting of a .dark-mode className on body to apply your styles.
 * This post also helps illustrate the power of hook composition.
 * The syncing of state to localStorage is handled by our useLocalStorage hook.
 * Detecting the user's dark mode preference is handled by our useMedia hook. Both of these hooks were created for other use-cases,
 *  but here we've composed them to create a super useful hook in relatively few lines of code. It's almost as if hooks bring the compositional power of React components to stateful logic! 🤯
 */
export declare const useDarkMode: () => (boolean | ((value: boolean | ((val: boolean) => boolean)) => void))[];
