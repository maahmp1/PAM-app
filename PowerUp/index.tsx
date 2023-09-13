import React from "react";
import { Image, StyleSheet, Text, Dimensions, View, } from "react-native";
import logo from "../assets/logo.png";
import topo from "../assets/topo.png";
import Card from '../shared/card';
import maxLogo from '../assets/maxLogo.png'
import LinearGradient from 'react-native';
import creatine from '../assets/creatine.png';
import wheyMax from '../assets/wheyMax.png';


const width = Dimensions.get("screen").width;

export default function PowerUp() {
  return (
    <>
      <View >
        <Image source={logo} style={estilos.topo} />
        {/* <Text style={estilos.titulo}>Detalhes do Carrinho</Text> */}


        <View style={estilos.carrinho}>
          <Text style={estilos.nome}>Carrinho de Compras</Text>
          <Card>
            <View style={estilos.teste}>
              <View style={estilos.produto}>
                <Image style={estilos.logo} source={creatine}></Image>
                <Text style={estilos.descricao2}>
                  Creatina Importada 150g - Max Titanium
                </Text>
                <Text style={estilos.preco2}>R$40,00</Text>
              </View>
            </View>
          </Card>

          <Card>
            <View style={estilos.teste}>
              <View style={estilos.produto}>
                <Image style={estilos.logo} source={wheyMax}></Image>
                <Text style={estilos.descricao}>
                  100% Whey Protein 900g - Max Titanium                </Text>
                <Text style={estilos.preco}>R$80,00</Text>
              </View>
            </View>
          </Card>
        </View>

      </View>
    </>

  );
}
const estilos = StyleSheet.create({

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
    marginBottom: 10

  },

  teste: {
    flexDirection: "row",
  },

  produto: {
    paddingVertical: 12,
    textAlign: "center"
  },

  logo: { //produto que aparece no carrinho
    margin: 15,
    marginTop: "0%",
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    left:110

  },

  // product: {
  //   flex:1,
  //   flexDirection: "row",

  //   marginTop: "0%",
  //   width: 80,
  //   height: 80
  // },

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
    textAlign: "center",

  },
  descricao2: {
    color: "#A3A3A3",
    fontFamily: "FRegular",
    marginLeft: 20,
    textAlign: "center",

  },

  preco: {
    fontSize: 26,
    fontFamily: "FMedium",
    color: "#2A9F85",
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",

  },
  preco2: {
    fontSize: 26,
    fontFamily: "FMedium",
    color: "#2A9F85",
    marginTop: 15,
    marginBottom: 5,
    marginLeft:15,
    textAlign: "center",

  },

});
