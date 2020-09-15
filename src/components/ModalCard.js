import React, { useSelector, useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "./../constants/colors";

import { Ionicons } from "@expo/vector-icons";
const ModalCard = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    backgroundColor: "white",
    height: 140,
    flexDirection: "row",
    flexWrap: "wrap",
    elevation: 8,
    borderRadius: 10,
    // width:"95%"
  },
});

export default ModalCard;
