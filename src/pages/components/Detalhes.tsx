import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Card from "../../shared/card";
import creatine from "../../../assets/creatine.png";

type Props = {
  nome: string;
  descricao: string;
  preco: string;
  botao:string;
}

export default function Detalhes({ botao, nome, descricao, preco }: Props) {
  return (
    <>
      
        <View style={styles.carrinho}>
          <Text style={styles.nome}>{nome}</Text>
          <Card>
            <View style={styles.teste}>
              <View style={styles.produto}>
                <Image style={styles.logo} source={creatine}></Image>
                <Text style={styles.descricao}>
                  {descricao}
                </Text>
                <Text style={styles.preco}>{preco}</Text>
                <TouchableOpacity style={styles.botao}>
                <Text style={styles.textobotao}>{botao}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </View>
      
    </>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 10,
  },

  teste: {
    flexDirection: "row",
  },

  produto: {
    // paddingVertical: 12,
    textAlign: "center",
    alignItems: "center"
  },

  logo: {
    //produto que aparece no carrinho
    margin: 10,
    marginTop: "0%",
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",

  },

  nomeProduto: {
    fontSize: 16,
    fontFamily: "FBold",
    lineHeight: 26,
    // marginLeft: 12,
  },

  descricao: {
    color: "#A3A3A3",
    fontFamily: "FRegular",
    textAlign: "center",
    marginLeft: 5
  },
 
  preco: {
    fontSize: 26,
    fontFamily: "FMedium",
    color: "#2A9F85",
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 15,
    textAlign: "center",
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2a9f85',
    paddingVertical: 16,
    borderRadius: 6,
    width:"100%",
    marginLeft:8,
    marginBottom:6

  },
  textobotao: {
    textAlign: "center",
    color: "#ffffff",
    lineHeight: 26,
    fontFamily: "MontserratBold"
  }
});
