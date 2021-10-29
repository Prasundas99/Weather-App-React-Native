import React from "react";

//import * as firebase from 'firebase'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyApLDzwCkRr6wdj0rcsclAa_LjrvnQuEdM",
  authDomain: "linkin-park-tribute-page.firebaseapp.com",
  databaseURL: "https://linkin-park-tribute-page.firebaseio.com",
  projectId: "linkin-park-tribute-page",
  storageBucket: "linkin-park-tribute-page.appspot.com",
  messagingSenderId: "609406729652",
  appId: "1:609406729652:web:7e9693f9965fc384cfc6e1",
  measurementId: "G-LWV64RGCFY"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
*/
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
