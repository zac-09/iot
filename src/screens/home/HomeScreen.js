import React, { useEffect, useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import Colors from "./../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import * as dataActions from "./../../../store/actions/remoteData";
import ModalCard from "./../../components/ModalCard";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
} from "react-native-chart-kit";
const HomeScreen = (props) => {
  const remoteData = useSelector((state) => state.data.data);
  const carbon = remoteData.HUMIDITY ? parseInt(remoteData.HUMIDITY) / 100 : 0;
  const dispatch = useDispatch();
  const data = {
    // labels: ["Carbondioxide"], // optional
    data: [carbon],
  };
  const dataPie = [
    {
      name: "oxygen",
      population: 0.2,
      color: "rgba(0, 0, 0, .3)",
      legendFontColor: Colors.accent,
      legendFontSize: 10,
    },
    {
      name: "Nitrogen",
      population: 0.1,
      color: "green",
      legendFontColor: Colors.accent,
      legendFontSize: 10,
    },
    {
      name: "Carbonmonoxide",
      population: 0.3,
      color: Colors.accent,
      legendFontColor: Colors.accent,
      legendFontSize: 10,
    },
    {
      name: "Carbondioxide",
      population: 0.2,
      color: "#ffffff",
      legendFontColor: Colors.accent,
      legendFontSize: 10,
    },
    {
      name: "other gases",
      population: 0.2,
      color: "rgb(0, 0, 255)",
      legendFontColor: Colors.accent,
      legendFontSize: 10,
    },
  ];
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
  useEffect(() => {
    dispatch(dataActions.getData());
    dispatch(dataActions.getGraphData());

  }, [dispatch]);
  return (
    <View style={styles.screen}>
      <ScrollView>
        <ModalCard style={styles.modal}>
          <Ionicons name="md-thermometer" size={65} color={Colors.accent} />
          <View style={styles.textContainer}>
            <Text
              style={{ fontSize: 20, marginLeft: 20, color: Colors.accent }}
            >
              Temperature
            </Text>
            <Text
              style={{ fontSize: 30, marginLeft: 35, color: Colors.accent }}
            >
              {remoteData.DHT} °C
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 35,
                color: Colors.accent,
                marginTop: 20,
              }}
            >
              {remoteData.created_at}
            </Text>
          </View>
        </ModalCard>
        <ModalCard style={styles.modal}>
          <FontAwesome name="tachometer" size={65} color={Colors.accent} />
          <View style={styles.textContainer}>
            <Text
              style={{ fontSize: 20, marginLeft: 20, color: Colors.accent }}
            >
              Humidity
            </Text>
            <Text
              style={{ fontSize: 30, marginLeft: 35, color: Colors.accent }}
            >
              {remoteData.WATER}%
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 35,
                color: Colors.accent,
                marginTop: 20,
              }}
            >
              {remoteData.created_at}
            </Text>
          </View>
        </ModalCard>

        <ModalCard style={styles.modal}>
          <ProgressChart
            style={{ marginLeft: -50 }}
            data={data}
            width={200}
            height={100}
            strokeWidth={16}
            radius={30}
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
              Carbondioxide
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 35,
                color: Colors.accent,
                marginTop: 70,
              }}
            >
              {remoteData.created_at}
            </Text>
          </View>
        </ModalCard>
        <ModalCard style={styles.modal}>
          <ProgressChart
            style={{ marginLeft: -50 }}
            data={{ data: [0.2] }}
            width={200}
            height={100}
            strokeWidth={16}
            radius={27}
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
              oxygen
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 35,
                color: Colors.accent,
                marginTop: 70,
              }}
            >
              {remoteData.created_at}
            </Text>
          </View>
        </ModalCard>
        <ModalCard style={styles.modal}>
          <ProgressChart
            style={{ marginLeft: -50 }}
            data={{ data: [0.1] }}
            width={200}
            height={100}
            strokeWidth={16}
            radius={27}
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
              Nitrogen
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 35,
                color: Colors.accent,
                marginTop: 70,
              }}
            >
              {remoteData.created_at}
            </Text>
          </View>
        </ModalCard>
        <ModalCard style={styles.modal}>
          <ProgressChart
            style={{ marginLeft: -50 }}
            data={{ data: [0.2] }}
            width={200}
            height={100}
            strokeWidth={16}
            radius={27}
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
              other gases
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 35,
                color: Colors.accent,
                marginTop: 70,
              }}
            >
              {remoteData.created_at}
            </Text>
          </View>
        </ModalCard>
        <ModalCard style={styles.modal}>
          <ProgressChart
            style={{ marginLeft: -50 }}
            data={{ data: [0.3] }}
            width={200}
            height={100}
            strokeWidth={16}
            radius={27}
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
              Carbonmonoxide
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 35,
                color: Colors.accent,
                marginTop: 70,
              }}
            >
              {remoteData.created_at}
            </Text>
          </View>
        </ModalCard>
        <ModalCard style={styles.modal}>
          <PieChart
            style={{ marginLeft: -40 }}
            hasLegend
            data={dataPie}
            width={300}
            height={110}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
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
              overall
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
    width: "70%",
    marginTop: 20,
    padding: 15,

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
    headerTitle: "Air Quality Monitor",
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
