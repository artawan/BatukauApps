import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Drawer
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import CustomDrawerItem from "../CustomDrawerItem/CustomDrawerItem";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeIcon from "../../../assets/icon.png";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image source={HomeIcon} size={50} />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>PURA LUHUR BATUKAU</Title>
              </View>
            </View>

            <View style={styles.row}>
              <Caption style={styles.caption}>
                Jl. Penatahan-Wongayagede, Penebel
              </Caption>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => 
                props.navigation.navigate('Home', {initialRoute: "Home"})
              }
            />
            <CustomDrawerItem
              image={require("./icon/sejarah-icon.png")}
              label="Sejarah Pura"
              onPress={() => {
                props.navigation.navigate("Sejarah");
              }}
            />
            <CustomDrawerItem
              image={require("./icon/denah-icon.png")}
              label="Denah Pura"
              onPress={() => {
                props.navigation.navigate("Denah", {initialRoute: "Denah"});
              }}
            />
            <CustomDrawerItem
              image={require("./icon/sembahyang-icon.png")}
              label="Tahapan Persembahyangan"
              onPress={() => {
                props.navigation.navigate("Tahapan");
              }}
            />

            <CustomDrawerItem
              image={require("./icon/larangan-icon.png")}
              label="Larangan"
              onPress={() => {
                props.navigation.navigate("Larangan");
              }}
              />

            <CustomDrawerItem
              image={require("./icon/canang-sari-icon.png")}
              label="Upakara"
              onPress={() => {
                props.navigation.navigate("Upakara", {initialRoute: "Upakara"});
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="information-outline" color={color} size={size} />
          )}
          label="Profile"
          onPress={() => {
            props.navigation.navigate("Profile", {initialRoute: "Profile"});
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontFamily: "balinese-family",
    fontSize: 28,
    marginTop: 15,
    fontWeight: "bold",
    textAlignVertical: "center"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    flexWrap:"wrap"
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
