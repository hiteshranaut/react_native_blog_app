import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { BlogProvider } from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator({
  Index: IndexScreen
} , {
  initialRouteName: 'Index' ,
  defaultNavigationOptions: {
    title: 'blogs'
  }
})

// export default createAppContainer(navigator);

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
      <App />
    </BlogProvider>
}