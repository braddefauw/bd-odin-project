import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    element.textContent = myName('Brad');

    return element;
  }
  
  document.body.appendChild(component());