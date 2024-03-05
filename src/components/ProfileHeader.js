// ProfileHeader.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles/ProfileHeaderStyles';

const ProfileHeader = ({ userName }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.maxContainer}>
      <View style={styles.acountContainer}>
        <View style={styles.letter}>
          <Text style={styles.initialLetter}>J</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </View>
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
    </View>
  );
};

export default ProfileHeader;
