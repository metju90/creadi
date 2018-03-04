import React from 'react';
import { storiesOf } from '@storybook/react';
import NavigationBar from './index';

storiesOf('Dashboard component', module)
  .add('Red color background ', () => <NavigationBar isBackgroundRed />)
  .add('Standard color background ', () => <NavigationBar />);


// Storybook worked perfectly fine when the dashboard
//  was an isolated component. It broke after connecting it
// to redux. here is a fix
// https://medium.com/ingenious/storybook-meets-redux-6ab09a5be346
