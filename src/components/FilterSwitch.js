import React, { useSelector, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Switch,
} from "react-native";
import Colors from "./../constants/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={{color:Colors.accent}}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.accent : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FilterSwitch;
