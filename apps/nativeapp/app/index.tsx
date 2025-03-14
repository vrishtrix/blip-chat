import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<View style={styles.background}>
			<SafeAreaView>
				<Text style={styles.content}>Hello, World!</Text>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		height: '100%',
		backgroundColor: 'black',
	},
	content: {
		color: 'white',
	},
});
