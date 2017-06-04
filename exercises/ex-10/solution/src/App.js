import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">Banking</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li class="active">Payees</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
