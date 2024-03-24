import { Image, Text, View } from "react-native";

import { styles } from "./home.styles";
import { NEWS_IMAGE_URL } from "../../utils/constants";

export default function NewsListItem({ newsItem }) {
  return (
    <View style={styles.newsItemContainer}>
      <View style={styles.newsImageContainer}>
        <Image
          resizeMode="contain"
          style={styles.newsImage}
          source={{ uri: NEWS_IMAGE_URL + newsItem.image }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.newsTitle}>{newsItem.title}</Text>
        <Text style={styles.newsDate}>{newsItem.date}</Text>
        <Text style={styles.newsShortText}>{newsItem.shortText}</Text>
      </View>
    </View>
  );
}
