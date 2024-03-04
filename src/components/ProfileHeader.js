// ProfileHeader.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DATA, theme } from '../../constants'

const ProfileHeader = ({ userName }) => {
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cobranza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ventas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   maxContainer: {
    backgroundColor: theme.colors.secondary,
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
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default ProfileHeader;
