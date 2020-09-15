import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import Colors from "./../../constants/colors";
import ModalCard from "./../../components/ModalCard";
import FilterSwitch from "./../../components/FilterSwitch";


import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";

const SwitchScreen = (props) => {
 const [switch1,setSwitch1] = useState(false)
 const [switch2,setSwitch2] = useState(false)
 const [reset,setReset] = useState(false)

  return (
    <View style={styles.screen}>
        <ModalCard style={styles.modal} >
     <FilterSwitch
        label="Switch One"
        state={switch1}
        onChange={newValue => setSwitch1(newValue)}
      />
    
        </ModalCard>
        <ModalCard style={styles.modal} >
     <FilterSwitch
        label="Switch Two"
        state={switch2}
        onChange={newValue => setSwitch2(newValue)}
      />
    
        </ModalCard>
        <ModalCard style={styles.modal} >
     <FilterSwitch
        label="Reset device"
        state={reset}
        onChange={newValue => setReset(newValue)}
      />
    
        </ModalCard>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modal: {
    width: "90%",
    marginTop: 20,
    padding: 15,
    height: 80,
    backgroundColor: Colors.primary,
    alignSelf: "center",
    overflow: "hidden",
  },
  textContainer: {
    flexDirection: "column",
    position: "absolute",
    right: 20,
    top: 15,
  },
  chartText: {
    flexDirection: "column",
    position: "absolute",
    right: 20,
    top: 5,
  },
});
SwitchScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Remote Switching",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton} color>
          <Item
          color={Colors.primary}
            title="Save"
            iconName="md-save"
            onPress={navData.navigation.getParam('save')}
          />
        </HeaderButtons>
      )
  };
};
export default SwitchScreen;
