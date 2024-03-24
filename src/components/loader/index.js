import { ActivityIndicator, Text, View } from "react-native";

import { styles } from "./loader.styles";

export default function Loader({ title, size = "large", ...props }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} {...props} />
      {title && <Text>{title}</Text>}
    </View>
  );
}
