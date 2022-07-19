import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

export default App;

// functional components example

// import React from 'react';
// import MyComponent from './MyComponent';

// function App() {
//   return (
//     <div>
//       <MyComponent title="Hello World" />
//     </div>
//   );
// }

// export default App;
