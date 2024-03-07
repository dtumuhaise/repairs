import React from 'react';
import Header from './components/Header';
import NewCustomerForm from './components/NewCustomerForm';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <NewCustomerForm />

      </div>
    );
  }
}

export default App;
