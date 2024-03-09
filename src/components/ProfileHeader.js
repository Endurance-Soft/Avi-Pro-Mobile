// ProfileHeader.js
// External library imports
import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

// Local imports
import Cascading from "../animation/CascadingFadeInView";
import { theme } from "../../constants";
import { styles } from "./styles/ProfileHeaderStyles";

secondary = theme.colors.secondary;

const ProfileHeader = ({ userName }) => {
  const navigation = useNavigation();
  const [animationKey, setAnimationKey] = useState(Date.now());
  useFocusEffect(
    useCallback(() => {
      setAnimationKey(Date.now());
    }, [])
  );
  return (
    <View style={styles.maxContainer}>
      <StatusBar style="ligth" backgroundColor={secondary} />
      <Cascading delay={100} animationKey={animationKey}>
        <View style={styles.acountContainer}>
          <View style={styles.letter}>
            <Text style={styles.initialLetter}>J</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
        </View>
      </Cascading>
      <Cascading delay={200} animationKey={animationKey}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ClientSearchScreen")}
          >
            <Icon name="money" size={40} color="black" />
            <Text style={styles.buttonText}>Cobranza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="list-alt" size={40} color="black" />
            <Text style={styles.buttonText}>Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="line-chart" size={40} color="black" />
            <Text style={styles.buttonText}>Ventas</Text>
          </TouchableOpacity>
        </View>
      </Cascading>
    </View>
  );
};

export default ProfileHeader;
