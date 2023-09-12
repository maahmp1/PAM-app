import React from "react";
import { Image, StyleSheet, Text, Dimensions, View, } from "react-native";
import logo from "../assets/logo.png";
import topo from "../assets/topo.png";
import Card from '../shared/card';

import LinearGradient from 'react-native';


const width = Dimensions.get("screen").width;

export default function PowerUp() {
  return (
    <>
      <View style={estilos.back}>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhes do Carrinho</Text>


        <View style={estilos.carrinho}>
          <Text style={estilos.nome}>Carrinho de Compras</Text>
          <Card>
            <View style={estilos.teste}>
              <View style={estilos.produto}>
                <Image style={estilos.logo} source={logo}></Image>
                <Text style={estilos.descricao}>
                  Creatina importada da Alemanha, vendida por Power UP Suplementos.
                </Text>
                 <Text style={estilos.preco}>R$80,00</Text> 
              </View>
            </View>
          </Card>
        </View>
        {/* <LinearGradient
          colors={['purple', 'white']}
          style={estilos.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text>Home Screen</Text>
        </LinearGradient> */}
      </View>
    </>

  );
}
const estilos = StyleSheet.create({

  back: {
    backgroundColor: "#D4D4D4",
    height: "100%",
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titulo: {
    width: "100%",
    fontFamily: "FRegular",
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
    textAlign: "center",

  },

  teste: {
    flexDirection: "row",
  },

  produto: {
    // flexDirection: "row",
    paddingVertical: 12,
    textAlign: "center"
  },

  logo: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: "0%",
    left: 115
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
    textAlign: "center"
  },

  preco: {
    fontSize: 26,
    fontFamily: "FMedium",
    color: "#2A9F85",
    marginTop: 15,
    marginBottom: 15,
    textAlign:"center",
    
  },

});
