import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/main'
import Login from './screens/login'
import Register from './screens/register'
import Menu from './screens/menu'
import Profile from './screens/profile'
import AddLocal from './screens/addLocal'
import SelectLocal from './screens/selectLocal'
import SelectGame from './screens/selectGame'
import Play from './screens/play'

import Constants from './config/constants.js';
import * as firebase from "firebase";


firebase.initializeApp(Constants.FirebaseConfig);

const RootStack = createStackNavigator({ Main: Main, Register: Register, Login: Login, Menu: Menu, Profile: Profile, AddLocal: AddLocal, SelectLocal: SelectLocal, SelectGame: SelectGame, Play: Play });
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
