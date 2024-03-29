import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imagesContainer: {
    paddingHorizontal: 3,
    paddingVertical: 6,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  image: {
    aspectRatio: 1.5,
    flex: 1,
  },
});
