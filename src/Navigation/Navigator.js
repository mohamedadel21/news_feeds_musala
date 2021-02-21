import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Details from '../screens/Details';
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { connect } from 'react-redux';

const Stack = createStackNavigator();
const MyStack = (props) => {
  const linking = {
    prefixes: ["http://newsapi.org/"],
    config
  };
  const config = {
    screens: {
      details: {
        path: "post/:title/:description",
      },
    },
  };
  return (
    <NavigationContainer linking={linking} theme={props.theme.type == 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={props.lang.home}>
        <Stack.Screen component={Tabs} name={props.lang.home} options={{ headerShown: false, }} />
        <Stack.Screen component={Details} name="details" options={{ title: props.lang.details }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}






const mapStateToProps = ({ theme, lang }) => {
  return {
    theme: theme.theme,
    lang: lang.lang
  }
};
export default connect(mapStateToProps)(MyStack)


