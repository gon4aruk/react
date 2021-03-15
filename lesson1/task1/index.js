const rootElem = document.querySelector('#root');

const element = React.createElement(
    'div',
    { className: 'greeting' },
    'Hello, React!'
);

ReactDOM.render(element, rootElem)