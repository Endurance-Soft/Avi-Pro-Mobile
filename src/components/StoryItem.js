// StoryItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StoryItem = ({ story, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <Text style={styles.name}>{story.name}</Text>
      <Text style={styles.amount}>{story.amount} Bs</Text>
      <Text style={styles.date}>{story.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#4CAF50',
  },
  date: {
    fontSize: 14,
    color: '#757575',
  },
});

export default StoryItem;
