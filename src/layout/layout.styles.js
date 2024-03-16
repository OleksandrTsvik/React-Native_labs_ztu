import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  headerLogo: {
    width: 100,
    height: 31,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#373737",
  },
  headerContainerLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#f0f0f0",
  },
  headerLink: {
    alignItems: "center",
  },
  headerLinkText: {
    fontSize: 10,
    color: "#8c8c8c",
  },
  headerActiveLinkText: {
    fontSize: 10,
    color: "#0078ff",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 2,
    paddingHorizontal: 10,
  },
  footer: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "#ebebeb",
  },
  footerText: {
    fontSize: 12,
    fontStyle: "italic",
  },
});
