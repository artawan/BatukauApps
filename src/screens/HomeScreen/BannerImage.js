import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function BannerImage({ source }){
	return(
		<View style={ styles.bannerContainer}>
	      <Image
			source={source}
	        style={styles.bannerImage}
	      />
		</View>
	);
}

const styles = StyleSheet.create({
	bannerContainer: {
		shadowColor: '#000',
		shadowOffset: {width:0, height:6,},
		shadowRadius: 4,
		shadowOpacity: 0.24,
		backgroundColor: '#000',
		width: "100%",
		height: 200,
	},

	bannerImage:{
		height: 200,
		width: '100%',
		resizeMode: 'stretch',
	},

	banner:{
		display:'none',
	}
});