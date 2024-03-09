import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Cascading from "../animation/CascadingFadeInView";
import { theme } from "../theme.js";


const PayScreen = ({ route }) => {
  const navigation = useNavigation();
  const [animationKey, setAnimationKey] = useState(Date.now());
  useFocusEffect(
    useCallback(() => {
      setAnimationKey(Date.now());
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="ligth" backgroundColor={secondary} />
      <View style={styles.cover}>
        <View style={styles.up}>
          <Cascading delay={100} animationKey={animationKey}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
              >
                <Icon name="back" size={30} color="black" />
              </TouchableOpacity>
              <View style={styles.aviContainer}>
                <Text style={styles.avi}>Avipro</Text>
              </View>
            </View>
          </Cascading>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    cover: {
      backgroundColor: theme.colors.primary,
      zIndex: 1,
    },
    up: {
      backgroundColor: theme.colors.secondary,
      borderBottomLeftRadius: 22,
      borderBottomRightRadius: 22,
      elevation: 7,
    },
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: theme.colors.primary,
    },
    header: {
      flexDirection: "row",
      paddingHorizontal: 20,
      paddingVertical: 20,
      alignItems: "center",
    },
    back: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.skyBlue,
      borderRadius: 20,
      width: 60,
      height: 60,
    },
    aviContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    avi: {
      fontWeight: "bold",
      fontSize: 22,
      marginRight: 60,
    },
    listContainer: {
      flex: 1,
      backgroundColor: theme.colors.primary,
    },
  });

export default PayScreen;