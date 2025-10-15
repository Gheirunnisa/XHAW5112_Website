import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import DiscountScreen from './screens/DiscountScreen';
import PaymentScreen from './screens/PaymentScreen';
import ThankYouScreen from './screens/ThankYouScreen';
import LogoutScreen from './screens/LogoutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const COLORS = {
  primary: '#FFD500', // yellow
  text: '#000000',    // black
  background: '#FFFFFF', // white
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.primary },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: '#555',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Courses') iconName = 'book';
          else if (route.name === 'Contact') iconName = 'mail';
          else if (route.name === 'About') iconName = 'information-circle';
          else if (route.name === 'Discount') iconName = 'pricetags';
          else if (route.name === 'Logout') iconName = 'log-out';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Discount" component={DiscountScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
    