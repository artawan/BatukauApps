import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CustomDrawerItem({ image, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'stretch', }}>
        <View style={styles.optionIconContainer}>
          <Image
            source= {image}
            style={styles.optionIcon}
          />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  option: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  optionIconContainer: {
    width: 40,
    alignItems: "center",
    marginRight: 23,
  },
  optionIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});