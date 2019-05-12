import React, { Component } from 'react';
import WifiIndicator, { DBMToSignalStrength, SignalStrength } from 'react-wifi-indicator';
import logo from './logo.png';

export default class App extends Component {
  render () {
    return (
      <div className='demo-app'>
        <img src={logo} alt='Logo' className='demo-app__logo' />
        <img src='https://img.shields.io/npm/v/react-wifi-indicator.svg' alt='' />
        <h1>react-wifi-indicator</h1>
        <p>An easy-to-use wrapper that provides 6 different WiFi icons and a utility to convert raw dBm to signal strength categories.</p>
        <h2>Quick Start</h2>
        <p>First, install the module:</p>
        <code>
          <pre>
            {`npm install react-wifi-indicator --save`}
          </pre>
        </code>
        <h3>Demos</h3>
        <p>Using the strength prop to set the icon.</p>
        <div className='demo-app__content'>
          <code>
            <pre>
              {`import WifiIndicator from 'react-wifi-indicator'; \n`}
              {`// ... \n`}
              {`<WifiIndicator strength='EXCELLENT' /> \n`}
              {`<WifiIndicator strength='GREAT' /> \n`}
              {`<WifiIndicator strength='OKAY' /> \n`}
              {`<WifiIndicator strength='WEAK' /> \n`}
              {`<WifiIndicator strength='UNUSABLE' /> \n`}
              {`<WifiIndicator strength='DISCONNECTED' />`}
            </pre>
          </code>
          <WifiIndicator strength='EXCELLENT' />
          <WifiIndicator strength='GREAT' />
          <WifiIndicator strength='OKAY' />
          <WifiIndicator strength='WEAK' />
          <WifiIndicator strength='UNUSABLE' />
          <WifiIndicator strength='DISCONNECTED' />
        </div>

        <h3>Use the Enum</h3>
        Ideally, you should use the provided enum instead of “magic prop strings.”
        <div className='demo-app__content'>
          <code>
            <pre>
              {`import WifiIndicator, { SignalStrength } from 'react-wifi-indicator'; \n`}
              {`// ... \n`}
              {`<WifiIndicator strength={SignalStrength.EXCELLENT} /> \n`}
              {`<WifiIndicator strength={SignalStrength.GREAT} /> \n`}
              {`<WifiIndicator strength={SignalStrength.OKAY} /> \n`}
              {`<WifiIndicator strength={SignalStrength.WEAK} /> \n`}
              {`<WifiIndicator strength={SignalStrength.UNUSABLE} /> \n`}
              {`<WifiIndicator strength={SignalStrength.DISCONNECTED} /> \n`}
            </pre>
          </code>
          <WifiIndicator strength={SignalStrength.EXCELLENT} />
          <WifiIndicator strength={SignalStrength.GREAT} />
          <WifiIndicator strength={SignalStrength.OKAY} />
          <WifiIndicator strength={SignalStrength.WEAK} />
          <WifiIndicator strength={SignalStrength.UNUSABLE} />
          <WifiIndicator strength={SignalStrength.DISCONNECTED} />
        </div>

        <h2>dBm?</h2>
        <p>If you have dBm (decibel-milliwatts) you’ll need a way to calculate the signal strength. You can use the utility DBMToSignalStrength for that.</p>
        <h3>Import Setup</h3>
        <div className='demo-app__content'>
          <code>
            <pre>{`import WifiIndicator, { DBMToSignalStrength } from 'react-wifi-indicator';`}</pre>
          </code>
        </div>
        <h3>Demos</h3>
        <div className='demo-app__content'>
          <code>
            <pre>
              {`<WifiIndicator strength={DBMToSignalStrength(-42)} /> \n`}
              {`<WifiIndicator strength={DBMToSignalStrength(-51)} /> \n`}
              {`<WifiIndicator strength={DBMToSignalStrength(-62)} /> \n`}
              {`<WifiIndicator strength={DBMToSignalStrength(-76)} /> \n`}
              {`<WifiIndicator strength={DBMToSignalStrength(-89)} /> \n`}
              {`<WifiIndicator strength={DBMToSignalStrength(-100)} />`}
            </pre>
          </code>
          <WifiIndicator strength={DBMToSignalStrength(-42)} />
          <WifiIndicator strength={DBMToSignalStrength(-51)} />
          <WifiIndicator strength={DBMToSignalStrength(-62)} />
          <WifiIndicator strength={DBMToSignalStrength(-76)} />
          <WifiIndicator strength={DBMToSignalStrength(-89)} />
          <WifiIndicator strength={DBMToSignalStrength(-100)} />
        </div>
        <h3>Your Own Utility?</h3>
        <p>You can always write your own utility if you don’t like the heuristics of DBMToSignalStrength. Just remember that:</p>
        <ul>
          <li>-30 dBm is the maximum achievable signal strength.</li>
          <li>-42 is an amazing, but realistic signal strength.</li>
          <li>-90 dBm is unusable and approaching or drowning in the noise floor.</li>
        </ul>

        <h2>Styling and Accessibility</h2>
        <p>The icon is pretty much an image with an svg as the source. You can pass down alt attributes, styles, class names, etc.</p>
        <h3>Accessibility</h3>
        <p>You can pass an alt tag in order to add semantic meaning to the icons. But if you don’t provide one, the library will default it to an empty string. (Marking it as presentational.)</p>
        <h3>Custom Styles</h3>
        <div className='demo-app__content'>
          <code>
            <pre>
              {`<WifiIndicator \n`}
              {`  strength={SignalStrength.EXCELLENT} \n`}
              {`  alt='Excellent Wifi' \n`}
              {`  style={{\n`}
              {`    height: 100,\n`}
              {`    border: '2px solid cornflowerblue',\n`}
              {`    borderRadius: 4,\n`}
              {`    padding: 12,\n`}
              {`  }}\n`}
              {`/>`}
            </pre>
          </code>
          <WifiIndicator
            strength={SignalStrength.EXCELLENT}
            alt='Excellent Wifi'
            style={{
              height: 100,
              border: '2px solid cornflowerblue',
              borderRadius: 4,
              padding: 12
            }}
          />
        </div>
        <h3>Custom Icons</h3>
        <p>Using custom icons defeats the purpose of the library. But you can totally do it! Provide a prop called statusImages that looks like this:</p>
        <code>
          <pre>
            {`<WifiIndicator \n`}
            {`  statusImages={{\n`}
            {`    EXCELLENT: 'some path, data:img, etc.',\n`}
            {`    GREAT: 'some path, data:img, etc.',\n`}
            {`    OKAY: 'some path, data:img, etc.',\n`}
            {`    WEAK: 'some path, data:img, etc.',\n`}
            {`    UNUSABLE: 'some path, data:img, etc.',\n`}
            {`    DISCONNECTED: 'some path, data:img, etc.',\n`}
            {`  }}\n`}
            {`/>`}
          </pre>
        </code>
        <h2>Credits</h2>
        <ul>
          <li>Created by <a href='https://danicfilip.com/' rel='noopener noreferrer' target='_blank'>Filip Danić</a></li>
          <li>Default icons were created by <a href='https://www.draganakrtinic.com/' rel='noopener noreferrer' target='_blank'>Dragana Krtinić</a></li>
          <li>Project bootstraped with <a href='https://github.com/transitive-bullshit/create-react-library' rel='noopener noreferrer' target='_blank'>create-react-library</a></li>
        </ul>
      </div>
    )
  }
}
