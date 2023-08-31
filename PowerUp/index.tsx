import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import logo from "../assets/logo.png"

export default function PowerUp(){

    return(
        <Image source={logo} style={estilos.logo} />
    ) 

   
}
const estilos = StyleSheet.create({

    logo:{
        width: "100%",
        //  height: (578 / 768) * width,
    }
})