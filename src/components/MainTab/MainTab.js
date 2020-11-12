import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {Image} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {
  HomeScreen,
  DetailScreen,
  DenahScreen,
  ProfileScreen,
  SejarahScreen,
  UpakaraScreen,
} from "../../screens";
import ModalScreen from "../../screens/DenahScreen/ModalScreen";

const HomeStack = createStackNavigator();
const DenahStack = createStackNavigator();
const UpakaraStack = createStackNavigator();
const MainDenahStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({ color, route }) => {
  const { initialRoute } = route.params ?? "Home";

  return (
    <Tab.Navigator
      initialRouteName={initialRoute}
      inactiveColor="#333"
      activeColor="#000"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Denah"
        component={DenahStackScreen}
        options={{
          tabBarLabel: "Denah",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Upakara"
        component={UpakaraStackScreen}
        options={{
          tabBarLabel: "Upakara",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Image source={require('./assets/canang-sari-icon.png')} style={{width: 24, height: 24}} />
            // <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

// =============== Stack screen component =============== //
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerShown: false,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Sejarah"
      component={SejarahScreen}
      options={{
        title: "Sejarah",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const MainDenahStackScreen = ({ navigation }) => (
  <MainDenahStack.Navigator
  >
    <MainDenahStack.Screen
      name="Denah"
      component={DenahScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />

    <MainDenahStack.Screen
      name="Detail"
      component={DetailScreen}
    />
  </MainDenahStack.Navigator>
);

const DenahStackScreen = ({ navigation }) => (
  <DenahStack.Navigator
    mode="modal"
    headerMode="none"
  >
    <DenahStack.Screen
      name="Main"
      component={MainDenahStackScreen}
      options={{
        title: 'Denah',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />

    <DenahStack.Screen
      name="Modal"
      component={ModalScreen}
      options={({ route }) => ({
        title: route.params.name,
        headerLeft: () => (
          <Icon.Button
            name="ios-arrow-back"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={() => navigation.goBack()}
          ></Icon.Button>
        ),
      })}
    />
  </DenahStack.Navigator>
);

const UpakaraStackScreen = ({ navigation }) => (
  <DenahStack.Navigator
    screenOptions={{
      headerStyle: {},
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <UpakaraStack.Screen
      name="Upakara"
      component={UpakaraScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DenahStack.Navigator>
);
