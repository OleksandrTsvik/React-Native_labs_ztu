import { Text, View } from "react-native";

import { styles } from "./layout.styles";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Цвік Олександр Сергійович, ІПЗ-20-3</Text>
    </View>
  );
}
