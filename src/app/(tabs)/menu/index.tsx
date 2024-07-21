import { FlatList, View } from "react-native";

import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item, ...rest }) => {
        return <ProductListItem product={item} />;
      }}
      numColumns={2}
      contentContainerStyle={{
        gap: 10,
        padding: 10,
      }}
      columnWrapperStyle={{
        gap: 10,
      }}
    />
  );
}
