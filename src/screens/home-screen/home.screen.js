import React from "react";
import { FlatList, Text } from "react-native";

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
        <FlatList
          data={news}
          contentContainerStyle={styles.newsContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <NewsListItem newsItem={item} />}
        />
      )}
    </LayoutScreen>
  );
}
