import React from 'react';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import ThemeViewer from './ThemeViewer';

const App = () => {
  let company = {
    name   : 'Express Scripts',
    address: '100 Forest Lane',
    city   : 'Franklin Lakes',
    state  : 'NJ',
    zip    : '07027'
  };
  const today = new Date();
  let theme = '';

  const toggle = () => {
     theme = theme === 'ocean'? 'fire' : 'ocean';
     console.log(theme);
  };

  return (
    <section>
      <CustomHeader>
          <h1>Super-Fake Banking Services</h1>
          <div>Serving the community since Monday</div>
      </CustomHeader>
      <h1>{ today.getHours() > 11 ? 'Good Afternoon' : 'Good Morning'}, world</h1>
        <button onClick={() => toggle()}>toggle</button>

        <ThemeViewer theme={theme}/> /* why this no update?*/
      <CustomFooter company={company}/>
    </section>
  );
};

export default App;