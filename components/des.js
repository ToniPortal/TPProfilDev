import { Text, View, StyleSheet, Image } from 'react-native';

export default function Nom(props) {
  return (
    <View>
      <Text style={styles.paragraph}>{props.des}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 5,
    fontSize: 15,
    textAlign: 'center',
  },
});
