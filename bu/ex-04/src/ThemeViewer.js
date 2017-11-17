import React from 'react';

const ThemeViewer = ( props ) => {
    const ocean = {
        button: 'btn btn-info',
        label: 'label label-primary'
    };

    const fire = {
        button: 'btn btn-danger',
        label: 'label label-warning'
    };

    const theme = props.theme === 'ocean' ? ocean : fire;

  return (
    <div>
      <h2>Theme viewer</h2>
      <h3>Buttons</h3>
      <div>
        <button className={theme.button}>Click Me</button>&nbsp;
        <button className={theme.button}>Click Me</button>&nbsp;
        <button className={theme.button}>Click Me</button>
      </div>

      <h3>Labels</h3>
      <div>
        <h1><span className={theme.label}>Label</span></h1>
        <h2><span className={theme.label}>Label</span></h2>
        <h3><span className={theme.label}>Label</span></h3>
        <h4><span className={theme.label}>Label</span></h4>
        <h5><span className={theme.label}>Label</span></h5>
      </div>
    </div>
  );
};

export default ThemeViewer;
