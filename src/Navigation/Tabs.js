import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from '../screens/News';
import Colors from '../Utils/Colors';
import Settings from '../screens/Settings';
import { ScaleWidth } from '../Utils/scale-width';
import { Ionicons } from '@expo/vector-icons';
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { connect } from 'react-redux';

const Tab = createBottomTabNavigator();
const  MyStack =(props)=> {

  return (
      <Tab.Navigator tabBarOptions={{

       
        labelStyle: {
          fontSize: ScaleWidth(13),
          fontWeight:'bold'
        },
        iconStyle: {
          color: Colors.darkBlue
        }
        

      }}


        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === props.lang.news) {
              iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
            } else if (route.name === props.lang.settings) {
              iconName = 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.darkBlue,
          inactiveTintColor: props.theme.text,
        }}

      >
        <Tab.Screen name={props.lang.news} component={News} />
        <Tab.Screen name={props.lang.settings} component={Settings} />
      </Tab.Navigator>

  );
}






const mapStateToProps = ({ theme,lang}) => {
  return {
    theme:theme.theme,
    lang:lang.lang
  }
};
export default connect(mapStateToProps)(MyStack)


