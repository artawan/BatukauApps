import * as React from "react";
import {
  SejarahScreen,
  TahapanScreen,
  ProfileScreen,
} from "../../screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";;
import { DrawerContent } from "./DrawerContent";
import MainTabScreen from "../MainTab/MainTab";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();
const SejarahStack = createStackNavigator();
const TahapanStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={MainTabScreen}
      />
      <Drawer.Screen
        name="SejarahScreen"
        component={SejarahStackScreen}
      />
      <Drawer.Screen
        name="DenahScreen"
        component={MainTabScreen}
      />
      <Drawer.Screen
        name="TahapanScreen"
        component={TahapanStackScreen}
      />
      <Drawer.Screen
        name="LaranganScreen"
        component={MainTabScreen}
        />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileStackScreen}
      />
      <Drawer.Screen
        name="UpakaraScreen"
        component={MainTabScreen}
      />
    </Drawer.Navigator>
  );
}

const SejarahStackScreen = ({ navigation }) => (
  <SejarahStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SejarahStack.Screen
      name="Sejarah"
      component={SejarahScreen}
      options={{
        title: 'Sejarah',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        
      }}
    />
  </SejarahStack.Navigator>
);

const TahapanStackScreen = ({ navigation }) => (
  <TahapanStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <TahapanStack.Screen
      name="Tahapan"
      component={TahapanScreen}
      options={{
        title: 'Tahapan Persembahyangan',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        
      }}
    />
  </TahapanStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
  <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        
      }}
    />
  </ProfileStack.Navigator>
);

export default DrawerNavigation;
