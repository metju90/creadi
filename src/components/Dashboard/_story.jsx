import React from 'react';
import { storiesOf } from '@storybook/react';
import NavigationBar from './index';

storiesOf('Dashboard component', module)
  .add('Red background ', () => <NavigationBar isBackgroundRed />)
  .add('Standard background ', () => <NavigationBar />);
