import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function ProductDetailsScreen() {
  const { productId } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details" + productId }} />
      <Text style={{ fontSize: 20 }}>
        ProductDetailsScreen for id: {productId}
      </Text>
    </View>
  );
}

export default ProductDetailsScreen;
