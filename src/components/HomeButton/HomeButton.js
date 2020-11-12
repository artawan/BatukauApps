import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { HomeIcon } from "../../../assets/icon";

export default function HomeButton({ onPress }) {
  return (
    <View style={styles.iconContainer}>
      <RectButton onPress={onPress}>
        <Image source={HomeIcon} style={styles.icon} />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    display: "flex",
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 4,
    shadowOpacity: 0.24,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
});
