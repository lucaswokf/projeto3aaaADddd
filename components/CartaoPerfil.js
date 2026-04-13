//lucas.f
//Allyson.s


import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

export default function CartaoPerfil(props) {

  function enviarEmail() {
    Alert.alert(
      "E-mail enviado para:",
      props.email
    );
  }

  return (

    <View style={styles.card}>

      <Text style={styles.nome}>
        {props.nome}
      </Text>

      <Text style={styles.profissao}>
        {props.profissao}
      </Text>

      <Text style={styles.cidade}>
        {props.cidade}
      </Text>

      <Text style={styles.email}>
        {props.email}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={enviarEmail}
      >
        <Text style={styles.textoBotao}>
          Enviar E-mail
        </Text>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",

    padding: 20,

    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },

    width: 280,

    alignItems: "center"
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
  },

  profissao: {
    fontSize: 17,
    color: "#555"
  },

  cidade: {
    fontSize: 17,
     color: "#555"
  },

  email: {
    fontSize: 14,
    color: "#a1a0v0",
    marginBottom: 15
  },

  botao: {
    backgroundColor: "#6aadf5",

    paddingVertical: 7,

    paddingHorizontal: 25,

    borderRadius: 6
  },

  textoBotao: {
    color: "#FFf",
    fontWeight: "bold"
  }

});