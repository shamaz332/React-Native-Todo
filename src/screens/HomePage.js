import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "../components";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
});

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Card text={"Helo MIC testing"} />
    </View>
  );
};

export default HomePage;
