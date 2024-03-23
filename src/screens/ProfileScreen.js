//ProfileScreen.js
import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, Image, SafeAreaView } from "react-native";
import StyledText from "../utils/StyledText";
import { theme } from "../../constants";
import imgprofile from "../assets/imgprofile.png";
import TouchableData from "../components/TouchableData";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get('window').width;

const ProfileScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerAll}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Icon name="back" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.header}>
          <StyledText boldText style={styles.text}>Perfil</StyledText>
          <Image source={imgprofile} style={styles.avatar}></Image>
          <StyledText boldText style={styles.text}>{username}</StyledText>
          <StyledText regularText style={styles.textSub}>Cobrador</StyledText>
        </View>

      </View>
      <View style={styles.containerInfo}>
        <TouchableData
          label="Nombre completo"
          icon="person-circle-outline"
          value="Ejemplo hoy dia"
        />
        <TouchableData
          label="Empresa"
          icon="business-outline"
          value="AssureSoft"
        />
        <TouchableData
          label="Email"
          icon="mail-open-outline"
          value="hola@gmail.com"
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: theme.colors.secondary,
  },
  headerAll:{
    padding: 20,
    flexDirection: 'row',
    gap: screenWidth*0.11,
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 20,
    width: 60,
    height: 60,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  text: {
    paddingVertical: 10,
  },
  avatar: {
    height: screenWidth * 0.28,
    width: screenWidth * 0.28,
    marginVertical: screenWidth * 0.05,
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 50,
  },
  textSub: {
    color: theme.colors.slateGrey,
    fontSize: 16,
  },
  containerInfo:{
    marginVertical: 20,
  }
})

export default ProfileScreen;