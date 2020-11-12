import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function BannerImage({ source, tinggi }){
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
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {width:0, height:6,},
		shadowRadius: 4,
		shadowOpacity: 0.24,
		marginVertical: 5,
		backgroundColor: '#000',
		width: "98%",
		height: 200,
	},

	bannerImage:{
		borderRadius: 10,
		height: 200,
		width: '100%',
		resizeMode: 'stretch',
	},

	banner:{
		display:'none',
	}
});