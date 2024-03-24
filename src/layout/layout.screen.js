import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";

import Footer from "./footer";
import { styles } from "./layout.styles";

export default function LayoutScreen({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <StatusBar style="auto" />
        <ScrollView style={styles.mainContainer}>{children}</ScrollView>
      </View>
      <Footer />
    </View>
  );
}
