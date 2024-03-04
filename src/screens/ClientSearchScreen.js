// ClientSearchScreen.js
import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import ClientItem from '../components/ClientItem';
import { StatusBar } from 'expo-status-bar';
import { DATA, theme } from '../../constants'

const ClientSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('cliente');
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const formattedQuery = text.toLowerCase();
    const newData = DATA.filter(item => {
      if (selectedOption === 'cliente') {
        return item.name.toLowerCase().includes(formattedQuery);
      } else if (selectedOption === 'cuenta') {
        return item.code.toLowerCase().includes(formattedQuery);
      }
    });
    setFilteredData(newData);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderItem = ({ item }) => (
    <ClientItem client={item} onSelect={() => { /*item select*/ }} />
  );

  return (
    
      <SafeAreaView style={styles.container}>
      <StatusBar style="ligth" backgroundColor='#bbe6ec'/>
        <View style={styles.up}>
          <View style={styles.header}>
            <View style={styles.back}>
            </View>
            <View style={styles.aviContainer}>
              <Text style={styles.avi}>Avipro</Text>
            </View>
          </View>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={handleSearch}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={<View style={{ height: 10 }} />}
            ListFooterComponent={<View style={{ height: 10 }} />}
          />
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    up: {
      zIndex: 1,
      backgroundColor: theme.colors.secondary,
      borderBottomLeftRadius:22,
      borderBottomRightRadius:22,
      elevation: 7,
    },
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: theme.colors.primary,
    },
    header: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 20,
      alignItems: 'center',
    },
    back: {
      backgroundColor: theme.colors.skyBlue,
      borderRadius: 20,
      width: 60,
      height: 60,
    },
    aviContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avi: {
      fontWeight: 'bold',
      fontSize: 22,
      marginRight: 60,
    },
    listContainer: {
    flex:1,
      borderRadius: 15,
    },
  });
  

export default ClientSearchScreen;