const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Welcome from react root in App file'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
