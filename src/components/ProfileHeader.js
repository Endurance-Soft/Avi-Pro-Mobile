// ProfileHeader.js
import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles/ProfileHeaderStyles';
          import Cascading from '../animation/CascadingFadeInView';
          import { useFocusEffect } from '@react-navigation/native';

const ProfileHeader = ({ userName }) => {
          const [animationKey, setAnimationKey] = useState(Date.now());
          useFocusEffect(
            useCallback(() => {
                setAnimationKey(Date.now());
            }, [])
          );

  const navigation = useNavigation();
  return (
    <View style={styles.maxContainer}>
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
