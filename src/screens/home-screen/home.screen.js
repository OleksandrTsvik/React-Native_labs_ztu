import { FlatList, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "./home.styles";
import LayoutScreen from "../../layout/layout.screen";

export default function HomeScreen() {
  return (
    <LayoutScreen>
      <Text style={styles.title}>Новини</Text>
      <FlatList
        data={Array(20).fill(null)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.newsContainer}>
            <View style={styles.newsImage}>
              <Icon name="file-photo-o" size={40} color="#aaa" />
            </View>
            <View>
              <Text style={styles.newsTitle}>Заголовок новини</Text>
              <Text style={styles.newsDate}>Дата новини</Text>
              <Text style={styles.newsShortText}>Короткий текст новини</Text>
            </View>
          </View>
        )}
      />
    </LayoutScreen>
  );
}
