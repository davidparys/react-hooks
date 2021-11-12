# Utils-react-hooks

A set of useful react hooks intended to work with React.

## Installation

Use the following command to install the package

```bash
yarn add utils-react-hooks
```

# Hooks

## useWindowDimensions

This register a resize event listener that will let you know when you cross the threshold, it is useful to check if a certain window is on a mobile breakpoint for instance, or the other way around. The size props are based on tailwind's [Responsive Design resolutions](https://tailwindcss.com/docs/responsive-design)

### Usage

```javascript
const width = useWindowDimensions("sm");
```

Will return true or false if the window is lower than SM (640px)

### List of sizes

```javascript
switch (checkSize) {
  case "sm":
    return 640;
  case "md":
    return 768;
  case "lg":
    return 1024;
  case "xl":
    return 1280;
  case "2xl":
    return 1536;
}
```

## useWindowSize

Similarly instead of true or false this will just return the width of the current window.

### Usage

```javascript
const width = useWindowSize();
```

## usePreviousValue

This will get the previous value of a certain value (1 step back)

### Usage

```typescript
// Set a current state
const [scrollYValue, setScrollYValue] = useState<number>(0);
// Store the previous scroll Y value
const prevValue: number = usePreviousValue<number>(scrollYValue);
```

## useKeyPress

This hook makes it easy to detect when the user is pressing a specific key on their keyboard. The recipe is fairly simple, as I want to show how little code is required, but I challenge any readers to create a more advanced version of this hook. Detecting when multiple keys are held down at the same time would be a nice addition. Bonus points: also require they be held down in a specified order

### Usage

```javascript
function App() {
  // Call the hooks for each keys we want to check
  const happyPress: boolean = useKeyPress("h");
  const sadPress: boolean = useKeyPress("s");
  const robotPress: boolean = useKeyPress("r");
  const foxPress: boolean = useKeyPress("f");
  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}
```

## useAsync

It's generally a good practice to indicate to users the status of any async request. An example would be fetching data from an API and displaying a loading indicator before rendering the results.

Another example would be a form where you want to disable the submit button when the submission is pending and then display either a success or error message when it completes.

Rather than litter your components with a bunch of useState calls to keep track of the state of an async function, you can use our custom hook which takes an async function as an input and returns the value error, and status values we need to properly update our UI.

Possible values for status prop are: "idle", "pending", "success", "error". As you'll see in the code below, our hook allows both immediate execution and delayed execution using the returned execute function.

### Usage

```javascript
function App() {
  const { execute, status, value, error } =
    useAsync < string > (myFunction, false);
  return (
    <div>
      {status === "idle" && <div>Start your journey by clicking a button</div>}
      {status === "success" && <div>{value}</div>}
      {status === "error" && <div>{error}</div>}
      <button onClick={execute} disabled={status === "pending"}>
        {status !== "pending" ? "Click me" : "Loading..."}
      </button>
    </div>
  );
}
```

## useDarkMode

This hook handles all the stateful logic required to add a ☾ dark mode toggle to your website.

It utilizes localStorage to remember the user's chosen mode, defaults to their browser or OS level setting using the prefers-color-scheme media query and manages the setting of a .dark-mode className on body to apply your styles.

This post also helps illustrate the power of hook composition.
The syncing of state to localStorage is handled by our useLocalStorage hook.

Detecting the user's dark mode preference is handled by our useMedia hook. Both of these hooks were created for other use-cases, but here we've composed them to create a super useful hook in relatively few lines of code.

### Usage

```javascript
function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div>
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  );
}
```

## useLockBodyScroll

Sometimes you want to prevent your users from being able to scroll the body of your page while a particular component is absolutely positioned over your page (think modal or full-screen mobile menu).

It can be confusing to see the background content scroll underneath a modal, especially if you intended to scroll an area within the modal. Well, this hook solves that! Simply call the useLockBodyScroll hook in any component and body scrolling will be locked until that component unmounts.

### Usage

```javascript
function App() {
  //  State for our modal
  const [modalOpen, setModalOpen] = useState < boolean > false;
  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      <Content />
      {modalOpen && (
        <Modal
          title="Try scrolling"
          content="You cannot scroll"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
//  Define modal props type
type ModalProps = {
  title: string,
  content: string,
  onClose: () => void,
};
function Modal({ title, content, onClose }: ModalProps) {
  //  Call hook to lock body scroll
  useLockBodyScroll();
  return (
    <div className="absolute inset-0 p-10" onClick={onClose}>
      <div className="p-2 bg-white flex justify-center items-center">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
```

## useOnClickOutside

This hook allows you to detect clicks outside of a specified element.
In the example below we use it to close a modal when any element outside of the modal is clicked.

By abstracting this logic out into a hook we can easily use it across all of our components that need this kind of functionality (dropdown menus, tooltips, etc).

### Usage

```javascript
function App() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));
  return (
    <div>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
}
```

## useToggle

 Basically, what this hook does is that, it takes a parameter with value true or false and toggles that value to opposite.

 It's useful when we want to take some action into it's opposite action, for example: show and hide modal, show more/show less text, open/close side menu.

### Usage

```javascript
function App() {
  // Call the hook which returns, current value and the toggler function
  const [isTextChanged, setIsTextChanged] = useToggle();
  return (
      <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
  );
}
```

## useLocalStorage

Sync state to local storage so that it persists through a page refresh.
  
  Usage is similar to useState except we pass in a local storage key so that we can default to that value on page load instead of the specified initial value.

### Usage

```javascript
function App() {
    // Similar to useState but first arg is key to the value in local storage.
    const [name, setName] = useLocalStorage<string>("name", "Bob");
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
  }
```

## useMedia

  This hook makes it super easy to utilize media queries in your component logic.

  In our example below we render a different number of columns depending on which media query matches the current screen width, and then distribute images amongst the columns in a way that limits column height difference (we don't want one column way longer than the rest).
  
  You could create a hook that directly measures screen width instead of using media queries, but this method is nice because it makes it easy to share media queries between JS and your stylesheet.

###  Usage

```javascript
function App() {
  const columnCount = useMedia<number>(
    // Media queries
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    // Column counts (relates to above media queries by array index)
    [5, 4, 3],
    // Default column count
    2
  );
  // Create array of column heights (start at 0)
  let columnHeights = new Array(columnCount).fill(0);
  // Create array of arrays that will hold each column's items
  let columns = new Array(columnCount).fill().map(() => []) as Array<
    DataProps[]
  >;
  (data as DataProps[]).forEach((item) => {
    // Get index of shortest column
    const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    // Add item
    columns[shortColumnIndex].push(item);
    // Update height
    columnHeights[shortColumnIndex] += item.height;
  });
  // Render columns and items
  return (
    <div className="App">
      <div className="columns is-mobile">
        {columns.map((column) => (
          <div className="column">
            {column.map((item) => (
              <div
                className="image-container"
                style={{
                  // Size image container to aspect ratio of image
                  paddingTop: (item.height / item.width) * 100 + "%",
                }}
              >
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
