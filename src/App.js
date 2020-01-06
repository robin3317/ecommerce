import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import Register from './pages/register/Register';
import { auth, createUserProfileDocument } from './firebase/firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
