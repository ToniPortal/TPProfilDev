import { Text, View, StyleSheet, Image } from 'react-native';

export default function Nom(props) {
  return (
    <View>
      <Text style={styles.title}>{props.nom} {props.prenom},</Text>
      <Text style={styles.after}>{props.metier}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 0,
    fontWeight: "600"
  },
  after: {
        fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: "600"

  }
});
