"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarkMode = void 0;
const useMedia_1 = require("./../window-hooks/useMedia");
const react_1 = require("react");
const useLocalStorage_1 = require("./../values/useLocalStorage");
// DESCRIPTION
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
// Usage
// function App() {
//     const [darkMode, setDarkMode] = useDarkMode();
//     return (
//       <div>
//         <div className="navbar">
//           <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
//         </div>
//         <Content />
//       </div>
//     );
//   }
// Hook
const useDarkMode = () => {
    // Use our useLocalStorage hook to persist state through a page refresh.
    // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
    const [enabledState, setEnabledState] = (0, useLocalStorage_1.useLocalStorage)("dark-mode-enabled", false);
    // See if user has set a browser or OS preference for dark mode.
    // The usePrefersDarkMode hook composes a useMedia hook (see code below).
    const prefersDarkMode = usePrefersDarkMode();
    // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
    // This allows user to override OS level setting on our website.
    const enabled = enabledState !== null && enabledState !== void 0 ? enabledState : prefersDarkMode;
    // Fire off effect that add/removes dark mode class
    (0, react_1.useEffect)(() => {
        const className = "dark-mode";
        const element = window.document.body;
        if (enabled) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    }, [enabled] // Only re-call effect when value changes
    );
    // Return enabled state and setter
    return [enabled, setEnabledState];
};
exports.useDarkMode = useDarkMode;
// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
    return (0, useMedia_1.useMedia)(["(prefers-color-scheme: dark)"], [true], false);
}
