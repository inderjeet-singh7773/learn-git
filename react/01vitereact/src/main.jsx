import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

function MYApp() {
  return (
    <div>
      <h1>plz vist google ↓↓↓↓↓ </h1>
    </div>
  );
}

const anotherUser = "chai aur react";

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function ReactElement() {
    return (
        <a href="https://google.com" target="_blank">
            Click me to visit google
        </a>
    );
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
      Click me to visit google,
            anotherUser
  </a>
)

const reactElement2 = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit google'
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    yhe app hai, use hua hai function <App />,
    yhe myapp hai, use hua hai function <MYApp />,
    yhe react element hai, use hua hai function<ReactElement /> <br />
    yhe anotherElement hai, use hua hai const {anotherElement} <br />
    yhr reactElement2 hai , use hua hai const {reactElement2}
    </>
) 
