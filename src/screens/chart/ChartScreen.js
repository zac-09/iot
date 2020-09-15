import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import Colors from "./../../constants/colors";
import ModalCard from "./../../components/ModalCard";
import { useDispatch, useSelector } from "react-redux";
import * as dataActions from "./../../../store/actions/remoteData";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";

const HomeScreen = (props) => {
  const remoteData = useSelector((state) => state.data.graphData);
  const dataSets = [];
  const lables = [];
  remoteData.map((obj) => {
    lables.push(obj.created_at);
    if (obj.DHT === null) {
      obj.DHT = 0;
    }
    dataSets.push(obj.DHT);
  });
  console.log("the datasets are", dataSets);
  console.log("the labels are", lables);

  const data2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const data1 = {
    labels: ["oxygen", "Nitrogen", "CO₂", "CO", "others"], // optional
    data: [0.4, 0.6, 0.8, 0.1, 0.5],
  };
  const chartConfig = {
    backgroundGradientFrom: "#B28421",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#B28451",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(16, 29, 44, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: lables,
    datasets: [
      {
        data: dataSets,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Hotdays"], // optional
  };
  return (
    <View style={styles.screen}>
      <ScrollView>
        <ModalCard style={styles.modal}>
          <LineChart
            style={{ marginLeft: -30 }}
            data={data}
            width={380}
            height={276}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
            fromZero
          />
          <View style={styles.chartText}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                color: Colors.accent,
                marginBottom: 10,
              }}
            >
              Temperautre
            </Text>
          </View>
        </ModalCard>
        <ModalCard style={styles.modal}>
          <ProgressChart
            style={{ marginLeft: -40 }}
            data={data1}
            width={350}
            height={256}
            strokeWidth={14}
            radius={15}
            chartConfig={chartConfig}
            hideLegend={false}
          />
          <View style={styles.chartText}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                color: Colors.accent,
                marginBottom: 10,
              }}
            >
              Atmospheric Gases
            </Text>
          </View>
        </ModalCard>
        <ModalCard style={styles.modal}>
          <BarChart
            style={{ marginLeft: -5, marginTop: 30 }}
            data={data2}
            width={300}
            height={250}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
          <View style={styles.chartText}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                color: Colors.accent,
                marginBottom: 10,
              }}
            >
              Humidity
            </Text>
          </View>
        </ModalCard>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modal: {
    width: "95%",
    marginTop: 20,
    padding: 15,
    height: 350,
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
HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Graphs",
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
  };
};
export default HomeScreen;
