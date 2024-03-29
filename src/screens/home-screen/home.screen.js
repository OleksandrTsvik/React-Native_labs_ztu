import React from "react";
import { Text, View } from "react-native";

import { getNewsList } from "./home.service";
import { styles } from "./home.styles";
import NewsListItem from "./news-list.item";
import Loader from "../../components/loader";
import LayoutScreen from "../../layout/layout.screen";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    getNewsList()
      .then((response) => setNews(response))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <LayoutScreen>
      <Text style={styles.title}>Новини</Text>
      {isLoading ? (
        <Loader title="Завантаження новин ..." />
      ) : (
        <View style={styles.newsContainer}>
          {news.map((item, index) => (
            <React.Fragment key={index}>
              <NewsListItem newsItem={item} />
            </React.Fragment>
          ))}
        </View>
      )}
    </LayoutScreen>
  );
}
