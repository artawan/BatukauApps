import * as React from "react";
import {
  SejarahScreen,
  TahapanScreen,
  LaranganScreen,
} from "../../screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";;
import { DrawerContent } from "./DrawerContent";
import MainTabScreen from "../MainTab/MainTab";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();
const SejarahStack = createStackNavigator();
const TahapanStack = createStackNavigator();
const LaranganStack = createStackNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        initialParams={{ initialRoute: "Home" }}
        component={MainTabScreen}
      />
      <Drawer.Screen
        name="Sejarah"
        component={SejarahStackScreen}
      />
      <Drawer.Screen
        name="Denah"
        initialParams={{ initialRoute: "Denah" }}
        component={MainTabScreen}
      />
      <Drawer.Screen
        name="Tahapan"
        component={TahapanStackScreen}
      />
      <Drawer.Screen
        name="Larangan"
        component={LaranganStackScreen}
      />
      <Drawer.Screen
        name="Profile"
        initialParams={{ initialRoute: "Profile" }}
        component={MainTabScreen}
      />
      <Drawer.Screen
        name="Upakara"
        initialParams={{ initialRoute: "Upakara" }}
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

const LaranganStackScreen = ({ navigation }) => (
  <LaranganStack.Navigator
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
  <LaranganStack.Screen
      name="Larangan"
      component={LaranganScreen}
      options={{
        title: 'Larangan',
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
  </LaranganStack.Navigator>
);

export default DrawerNavigation;
