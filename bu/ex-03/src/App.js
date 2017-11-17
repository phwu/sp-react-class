import React from 'react';

import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';

const App = () => {
    let company = {
        name   : 'Express Scripts',
        address: '100 Forest Lane',
        city   : 'Franklin Lakes',
        state  : 'NJ',
        zip    : '07027'
    };

  return (
    <div>
      <CustomHeader today="Monday"/>
        <hr/>
    <section>
      <h1>Hello, world!</h1>
    </section>
        <hr/>
        <CustomFooter company={company} />
    </div>
  );
};

export default App;