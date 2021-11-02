# Utils-react-hooks

A set of useful react hooks intended to work with React.

## Installation

Use the following command to install the package

```bash
yarn add utils-react-hooks
```

## About

### useWindowDimensions

This register a resize event listener that will let you know when you cross the threshold, it is useful to check if a certain window is on a mobile breakpoint for instance, or the other way around. The size props are based on tailwind's [Responsive Design resolutions](https://tailwindcss.com/docs/responsive-design)

#### Usage

```javascript
const width = useWindowDimensions("sm");
```

Will return true or false if the window is lower than SM (640px)

#### List of sizes

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

### useWindowSize

Similarly instead of true or false this will just return the width of the current window.

#### Usage

```javascript
const width = useWindowSize();
```

### usePreviousValue

This will get the previous value of a certain value (1 step back)

#### Usage

```typescript
// Set a current state
const [scrollYValue, setScrollYValue] = useState<number>(0);
// Store the previous scroll Y value
const prevValue: number = usePreviousValue <number>(scrollYValue);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
