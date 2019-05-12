# react-wifi-indicator

[![NPM](https://img.shields.io/npm/v/react-wifi-indicator.svg)](https://www.npmjs.com/package/react-wifi-indicator)

An easy-to-use wrapper that provides 6 different WiFi icons and a utility to convert raw `dBm` to signal strength categories.

## Quick Start

First, install the module:
```
npm install react-wifi-indicator --save
```

### Demos

Using the `strength` prop to set the icon.

```
import WifiIndicator from 'react-wifi-indicator';
// ...
<WifiIndicator strength='EXCELLENT' />
<WifiIndicator strength='GREAT' />
<WifiIndicator strength='OKAY' />
<WifiIndicator strength='WEAK' />
<WifiIndicator strength='UNUSABLE' />
<WifiIndicator strength='DISCONNECTED' />
```

### Use the Enum

Ideally, you should use the provided enum instead of “magic prop strings.”

```
import WifiIndicator, { SignalStrength } from 'react-wifi-indicator';
// ...
<WifiIndicator strength={SignalStrength.EXCELLENT} />
<WifiIndicator strength={SignalStrength.GREAT} />
<WifiIndicator strength={SignalStrength.OKAY} />
<WifiIndicator strength={SignalStrength.WEAK} />
<WifiIndicator strength={SignalStrength.UNUSABLE} />
<WifiIndicator strength={SignalStrength.DISCONNECTED} />
```

## dBm?

If you have dBm (decibel-milliwatts) you’ll need a way to calculate the signal strength. You can use the utility `DBMToSignalStrength` for that.

### Import Setup

```
import WifiIndicator, { DBMToSignalStrength } from 'react-wifi-indicator';
````

### Demos

```
<WifiIndicator strength={DBMToSignalStrength(-42)} />
<WifiIndicator strength={DBMToSignalStrength(-51)} />
<WifiIndicator strength={DBMToSignalStrength(-62)} />
<WifiIndicator strength={DBMToSignalStrength(-76)} />
<WifiIndicator strength={DBMToSignalStrength(-89)} />
<WifiIndicator strength={DBMToSignalStrength(-100)} />
```

### Your Own Utility?

You can always write your own utility if you don’t like the heuristics of `DBMToSignalStrength`. Just remember that:

- `-30 dBm` is the maximum achievable signal strength.
- `-42 dBm` is an amazing, but realistic signal strength.
- `-90 dBm` is unusable and approaching or drowning in the noise floor.

## Styling and Accessibility

The icon is pretty much an `image` with an `svg` as the source. You can pass down `alt` attributes, `styles`, `classNames`, etc.

### Accessibility

You can pass an `alt` tag in order to add semantic meaning to the icons. But if you don’t provide one, the library will default it to an empty string. (Marking it as presentational.)
### Custom Styles

```
<WifiIndicator
  strength={SignalStrength.EXCELLENT}
  alt='Excellent Wifi'
  style={{
    height: 100,
    border: '2px solid cornflowerblue',
    borderRadius: 4,
    padding: 12,
  }}
/>
```

### Custom Icons

Using custom icons might defeat the purpose of the library. But you can totally do it! Provide a prop called `statusImages` that looks like this:

```
<WifiIndicator
  statusImages={{
    EXCELLENT: 'some path, data:img, etc.',
    GREAT: 'some path, data:img, etc.',
    OKAY: 'some path, data:img, etc.',
    WEAK: 'some path, data:img, etc.',
    UNUSABLE: 'some path, data:img, etc.',
    DISCONNECTED: 'some path, data:img, etc.',
  }}
/>
```

### Credits
- Created by [Filip Danić](https://danicfilip.com/)
- Default icons were created by [Dragana Krtinić](https://www.draganakrtinic.com/)
- Project bootstraped with [create-react-library](https://github.com/transitive-bullshit/create-react-library)

## License

MIT © [filipdanic](https://github.com/filipdanic)
