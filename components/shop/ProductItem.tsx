import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AppColors from "../../Colors/AppColors";
interface Props {
  title: string;
  imageUrl: string;
  price: number;
  onSelect:Function;
  onAddToCart?:Function
  children:any
}

const ProductItem = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => props.onSelect() }>
      <View style={styles.productItemView}>
        <View style={styles.imageBackgroundView}>
          <ImageBackground
            style={styles.imageBackground}
            source={{
              uri: props.imageUrl,
            }}
          />
        </View>

        <View style={styles.detailsView}>
          <View style={styles.productTitleView}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.priceText}>{props.price}$</Text>
          </View>

          <View style={styles.buttonsView}>
            {props.children}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItemView: {
    width: "100%",
    aspectRatio: 1.1,
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
  },
  productTitleView: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 5,
  },
  titleText: {
    fontSize: 16,
    color: "black",
    fontFamily:'open-sans-bold'
  },
  priceText: {
    color: AppColors.secondary,
    fontFamily:'open-sans-bold'
  },
  imageBackgroundView: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsView: {
    height: "40%",
    justifyContent: "space-around",
    padding: 20,
  },
});

export default ProductItem;
