import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";

const NavigationToggleButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <Icon.Button
        name="ios-menu"
        size={25}
        backgroundColor="#1f65ff"
        onPress={() => navigation.openDrawer()}
      ></Icon.Button>
    </View>
  );
};

export default NavigationToggleButton;

const styles = StyleSheet.create({});
