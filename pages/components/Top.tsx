import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Top() {
  return (
    <>
      <Image source={logo} style={styles.topo} />
      {/* <Text style={estilos.titulo}>Detalhes do Carrinho</Text> */}
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
});
