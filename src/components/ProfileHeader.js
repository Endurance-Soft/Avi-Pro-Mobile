// ProfileHeader.js
import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome';
const screenWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
   maxContainer: {
    backgroundColor: theme.colors.secondary,
    marginBottom: 5,
  },
  acountContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.skyBlue,
    marginHorizontal: 20,
    padding: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  letter: {
    backgroundColor: theme.colors.tertiary,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
  },
  initialLetter: {
    color: theme.colors.primary,
    fontSize: 22,
  },
  info: {
    marginLeft: 10,
  },
  welcomeText: {
    color: theme.colors.primaryText,
    fontSize: 15,
    fontWeight: 'normal',
  },
  userName: {
    color: theme.colors.primaryText,
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    marginTop: 8,
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 20,
    width: screenWidth*0.25,
    height: screenWidth*0.22,
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    paddingVertical: 10,
    paddingLeft: 13,
    elevation:5,
  },
  buttonText: {
    marginTop: 3,
    fontWeight: 'bold',
  },
});

export default ProfileHeader;
