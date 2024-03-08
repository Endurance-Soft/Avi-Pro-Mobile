// ProfileHeader.js
import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles/ProfileHeaderStyles';
import Cascading from '../animation/CascadingFadeInView';
import { useFocusEffect } from '@react-navigation/native';
import Modal from '../modals/SimpleModal';
import { StatusBar } from "expo-status-bar";
import { theme } from "../../constants";
secondary = theme.colors.secondary;
const ProfileHeader = ({ userName }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(Date.now());
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useFocusEffect(
    useCallback(() => {
        setAnimationKey(Date.now());
    }, [])
  );
const [statusBarColor, setStatusBarColor] = useState('#84A1A7');
const colorSteps = ['#B9E4EA','#AFD7DC', '#9DC1C6', '#89A8AC', '#7A969A', '#6D8689', '#647B7E', '#5F7477'];

useEffect(() => {
  let timers = [];

  if (modalVisible) {
    const interval = 30;
    colorSteps.forEach((color, index) => {
      let timer = setTimeout(() => {
        setStatusBarColor(color);
      }, interval * index);
      timers.push(timer);
    });
  } else {
    setStatusBarColor(theme.colors.secondary);
  }
  return () => timers.forEach(timer => clearTimeout(timer));
}, [modalVisible, theme.colors.secondary]);

  return (
    <View style={styles.maxContainer}>
    <StatusBar style="ligth" backgroundColor={statusBarColor} />
    <Modal isVisible={modalVisible} onClose={toggleModal} />
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClientSearchScreen')}>
          <Icon name="money" size={40} color="black" />
          <Text style={styles.buttonText}>Cobranza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
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
