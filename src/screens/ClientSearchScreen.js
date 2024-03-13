// ClientSearchScreen.js
import React, { useState, useCallback, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import ClientItem from "../components/ClientItem";
import ClientPaymentScreen from "./ClientPaymentScreen";
import { StatusBar } from "expo-status-bar";
import { DATA, theme } from "../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Cascading from "../animation/CascadingFadeInView";
import { useFocusEffect } from "@react-navigation/native";
import useStore from "../store";
import { clientes, notas_pendientes } from "../../DB";

const secondary = theme.colors.secondary;

const ClientSearchScreen = () => {
  function agregarNotasPendientesAClientes(clientes, notasPendientes) {
    const mapaNotasPorCuenta = notasPendientes.reduce((acc, nota) => {
        const cuenta = nota.Cuenta.trim();
        if (!acc[cuenta]) {
            acc[cuenta] = [];
        }
        acc[cuenta].push(nota);
        return acc;
    }, {});

    return clientes.map(cliente => {
        const cuentaCliente = cliente.Cuenta.trim();
        return {
            ...cliente,
            NotasPendientes: mapaNotasPorCuenta[cuentaCliente] || []
        };
    });
}

const clientesConNotas = agregarNotasPendientesAClientes(clientes, notas_pendientes);
// console.log(clientesConNotas[1].Notas_Pendientes);
  
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("cliente");
  const [filteredData, setFilteredData] = useState(DATA);
  const [animationKey, setAnimationKey] = useState(Date.now());
  useFocusEffect(
    useCallback(() => {
      setAnimationKey(Date.now());
    }, [])
  );
  const handleSearch = (text) => {
    setSearchQuery(text);
    const formattedQuery = text.toLowerCase();
    const newData = DATA.filter((item) => {
      if (selectedOption === "cliente") {
        return item.name.toLowerCase().includes(formattedQuery);
      } else if (selectedOption === "cuenta") {
        return item.code.toLowerCase().includes(formattedQuery);
      }
    });
    setFilteredData(newData);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderItem = ({ item, index }) => (
    <Cascading delay={400 + 80 * index} animationKey={animationKey}>
      <ClientItem
        client={item}
        onSelect={() =>
          navigation.navigate("ClientPaymentScreen", { clientId: item.id })
        }
      />
    </Cascading>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="ligth" backgroundColor={secondary} />
      <View style={styles.cover}>
        <View style={styles.up}>
          <Cascading delay={100} animationKey={animationKey}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
              >
                <Icon name="back" size={30} color="black" />
              </TouchableOpacity>
              <View style={styles.aviContainer}>
                <Text style={styles.avi}>Avipro</Text>
              </View>
            </View>
          </Cascading>
          <Cascading delay={200} animationKey={animationKey}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={handleSearch}
              selectedOption={selectedOption}
              onOptionChange={handleOptionChange}
            />
          </Cascading>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<View style={{ height: 10 }} />}
          ListFooterComponent={<View style={{ height: 10 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cover: {
    backgroundColor: theme.colors.primary,
    zIndex: 1,
  },
  up: {
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    elevation: 7,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: theme.colors.secondary,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 20,
    width: 60,
    height: 60,
  },
  aviContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avi: {
    fontWeight: "bold",
    fontSize: 22,
    marginRight: 60,
  },
  listContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});

export default ClientSearchScreen;
