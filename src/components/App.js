import React, { Component } from 'react';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <PhotoAlbum title='I mean...it is a bit much, right?' photos={['http://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa4be5dc2-59ed-11e8-9e86-99299e0f1a1c.jpg?crop=1909%2C1074%2C51%2C399&resize=685', 'https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg']}/>
        <Footer />
      </>
    );
  }
}

