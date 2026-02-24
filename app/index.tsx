import { View, Text, StyleSheet } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Screen Content Goes Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});