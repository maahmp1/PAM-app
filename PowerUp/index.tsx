import React from "react";
import { Image, StyleSheet, Text, Dimensions, View } from "react-native";
import logo from "../assets/logo.png";
import topo from "../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function PowerUp() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes do Carrinho</Text>

      <View style={estilos.carrinho}>
        <Text style={estilos.nome}>Carrinho de Compras</Text>

        <View style={estilos.teste}>
          <View style={estilos.produto}>
            <Image style={logo} source={logo}></Image>
          </View>

          <View>
            <Text style={estilos.nomeProduto}>Power Up</Text>

            <Text style={estilos.descricao}>
              Uma creatina importada da Alemanha
            </Text>
          </View>
        </View>
        <Text style={estilos.preco}>R$80,00</Text>
      </View>
    </>
  );
}
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titulo: {
    width: "100%",
    fontFamily: "FMedium",
    position: "absolute",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 16,
  },

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "FBold",
  },

  teste: {
    flexDirection: "row",
  },

  produto: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  logo: {
    width: 32,
    height: 32,
  },

  nomeProduto: {
    fontSize: 16,
    fontFamily: "FBold",
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: "#A3A3A3",
    fontFamily: "FRegular",

    marginLeft: 10,
  },

  preco: {
    fontSize: 26,
    fontFamily: "FMedium",
    color: "#2A9F85",
    marginTop: 8,
  },
});
