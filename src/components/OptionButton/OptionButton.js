import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Image, StyleSheet, Text, View } from 'react-native';

function OptionButton({ image, label, keterangan, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
          {keterangan && <Text style={styles.keterangan}>{keterangan}</Text>}
        </View>
        <View style={styles.optionIconContainer}>
          <Image
            source= {image}
            style={styles.optionIcon}
          />
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  option: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    padding:5,
  },
  optionTextContainer:{
    paddingTop: 5,
    paddingLeft: 10,
    width: "80%",
  },

  optionIcon:{
    width:70,
    height:70,
    borderRadius: 6,
    resizeMode: "contain",
  },
  keterangan:{
    fontSize: 11,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default OptionButton;