// StoryItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/StoryItemStyles';

  const StoryItem = ({ story, onSelect }) => {
    const dateTime = new Date(story.date);
    const formattedDate = dateTime.toLocaleDateString('es-BO', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = dateTime.toLocaleTimeString('es-BO', { hour: '2-digit', minute: '2-digit' });

    return (
      <TouchableOpacity onPress={onSelect} style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.name}>{story.name}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.date}>{formattedTime}</Text>
        </View>
        <View style={styles.containerAmount}>
          <Text style={styles.amount}>{story.amount} Bs</Text>
        </View>
        <View style={styles.icon}>
        </View>  
      </TouchableOpacity>
    );
  };


export default StoryItem;
