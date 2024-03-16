import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  newsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  newsImage: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f5f5f5",
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#141414",
  },
  newsDate: {
    fontSize: 10,
    color: "#aaa",
  },
  newsShortText: {
    fontSize: 12,
    color: "#141414",
  },
});
