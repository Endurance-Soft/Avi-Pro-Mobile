//TouchableData.js
import React,{useState, useEffect} from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, TextInput } from 'react-native';
import { theme } from "../assets/Theme";
import StyledText from "../utils/StyledText";
const { height } = Dimensions.get('window');
import { Ionicons } from "@expo/vector-icons";
import userStore from "../stores/userStore"; 
import {db} from "../../config/firebase";
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const TouchableData = ({ label, icon, value, fieldName }) => {
  const [valueEdit, setValueEdit] = useState(value);
  const [updatedData, setUpdatedData] = useState(false);
  const {user, setUser} = userStore(state => ({
    user: state.user,
    setUser: state.setUser
  }));

  const handleEditPress = () => {
    // firebase.database().ref(`cobradores/${idCobrador}/${fieldName}`).set(valueEdit);
    setUpdatedData(!updatedData);
  };

  useEffect(()=> {
    const fetchUserData = async () => {
      try{
        if (valueEdit === undefined) {
          console.log(`valueEdit is undefined for field ${fieldName}`);
          return;
        }else{
          const docRef = doc(db, 'cobradores', user.idDoc);
          console.log(docRef.id, "si se obtiene");
          await updateDoc(docRef, {[fieldName]: valueEdit});
        }
       
        }catch(e){
        console.error("Error al obtener documento: ", e);
      }
    };
    fetchUserData();
  }, [updatedData, fieldName, valueEdit]);


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
              if(name.length <= 30){
                 setValueEdit(name);
              }}
            }
            defaultValue={value}
            value={valueEdit}
            keyboardType="default"
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleEditPress}>
        <StyledText regularText style={styles.textLink}>Guardar </StyledText>
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