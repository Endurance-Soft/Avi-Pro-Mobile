//ProfileScreen.js
import React, { useState, useEffect, useCallback } from "react";
import { TouchableOpacity, View, StyleSheet, Dimensions, Image, SafeAreaView } from "react-native";
import StyledText from "../utils/StyledText";
import { theme } from "../../constants";
import imgprofile from "../assets/imgprofile.png";
import TouchableData from "../components/TouchableData";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Cascading from "../animation/CascadingFadeInView";
import { useFocusEffect } from "@react-navigation/native";
import userStore from "../store/userStore"; 
import {database} from "../../config/firebase";
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { err } from "react-native-svg";

const screenWidth = Dimensions.get('window').width;

const ProfileScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();
  const [animationKey, setAnimationKey] = useState(Date.now());
  const {user, setUser} = userStore();
  const [userData, setUserData] = useState({});


  useEffect(() => {
    if(!user) return;
    const docRef = doc(database, 'cobradores', user);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const {nombre, empresa, email} = data;
        setUserData({nombre, empresa, email});
      } else {
        console.log('Ningun documento!');
    }},(error) => {
      console.error("Error al obtener documento: ", error);
    });
  },[user]);

  useFocusEffect(
    useCallback(() => {
      setAnimationKey(Date.now());
    }, [])
  );
  return (
    <SafeAreaView style={styles.container}>
      <Cascading delay={150} animationKey={animationKey}>
      <View style={styles.headerAll}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Icon name="back" size={30} color="black" />
        </TouchableOpacity>
        <Cascading delay={200} animationKey={animationKey}>
        <View style={styles.header}>
          <StyledText boldText style={styles.text}>Perfil</StyledText>
          <Image source={imgprofile} style={styles.avatar}></Image>
          <StyledText boldText style={styles.text}>{userData.nombre}</StyledText>
          <StyledText regularText style={styles.textSub}>Cobrador</StyledText>
        </View>
        </Cascading>
      </View>
      </Cascading>
      <View style={styles.containerInfo}>
        <Cascading delay={200} animationKey={animationKey}>
        <TouchableData
          label="Nombre completo"
          icon="person-circle-outline"
          value={userData.nombre}
          fieldName="nombre"
        />
        </Cascading>
        <Cascading delay={300} animationKey={animationKey}>
        <TouchableData
          label="Empresa"
          icon="business-outline"
          value={userData.empresa}
          fieldName="empresa"
        />
        </Cascading>
        <Cascading delay={400} animationKey={animationKey}>
        <TouchableData
          label="Email"
          icon="mail-open-outline"
          value={userData.email}
          fieldName="email"
        />
        </Cascading>
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