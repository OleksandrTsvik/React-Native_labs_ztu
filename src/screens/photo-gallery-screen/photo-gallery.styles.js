import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imagesContainer: {
    gap: 10,
    paddingHorizontal: 3,
    paddingVertical: 6,
  },
  imagesColumnWrapper: {
    justifyContent: "space-between",
    gap: 10,
  },
  imageItem: {
    flex: 1,
    height: 100,
    borderRadius: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 4,
  },
});
