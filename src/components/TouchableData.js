//TouchableData.js
import React,{useState} from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, TextInput } from 'react-native';
import { theme } from "../../constants";
import StyledText from "../utils/StyledText";
const { height } = Dimensions.get('window');
import { Ionicons } from "@expo/vector-icons";

const TouchableData = ({ label, icon, value, fieldName }) => {
  const [valueEdit, setValueEdit] = useState(value);
  
  const handleEditPress = () => {
    // firebase.database().ref(`cobradores/${idCobrador}/${fieldName}`).set(valueEdit);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.icono}> 
          <Ionicons name={icon} size={25} color="black" />
        </TouchableOpacity>
        <View>
          <StyledText boldText style={styles.text}>{label}</StyledText>
          <TextInput 
            style={styles.text}
            onChangeText={name => {
              if(name.length <= 30 && name.match("^[a-zA-Z ]*$")){
                 setValueEdit(name);
              }}
            }
            defaultValue={value}
            value={valueEdit}
            keyboardType="default"
          />
        </View>
      </View>
      <TouchableOpacity onPress={this.handleEditPress}>
        <StyledText regularText style={styles.textLink}>Editar </StyledText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 2,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: theme.colors.otherWhite,
    display: 'flex',
    marginVertical: 8,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  icono:{
    backgroundColor: theme.colors.skyBlue,
    padding: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
  textLink:{
    color: theme.colors.green,
    fontSize: 15,
  }
});

export default TouchableData;