import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  newsContainer: {
    gap: 20,
  },
  newsItemContainer: {
    flexDirection: "column",
  },
  newsImageContainer: {
    padding: 4,
    backgroundColor: "#f5f5f5",
  },
  newsImage: {
    aspectRatio: 2,
    flex: 1,
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#141414",
  },
  newsDate: {
    fontSize: 10,
    textAlign: "right",
    color: "#aaa",
  },
  newsShortText: {
    fontSize: 12,
    textAlign: "justify",
    color: "#141414",
  },
});
