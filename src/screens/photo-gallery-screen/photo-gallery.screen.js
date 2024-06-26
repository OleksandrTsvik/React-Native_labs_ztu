import React from "react";
import { Image, View } from "react-native";

import { getListPhotos } from "./photo-gallery.service";
import { styles } from "./photo-gallery.styles";
import ListWithColumns from "../../components/list-with-columns";
import Loader from "../../components/loader";
import LayoutScreen from "../../layout/layout.screen";
import { PHOTOS_URL } from "../../utils/constants";

export default function PhotoGalleryScreen() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    getListPhotos()
      .then((response) => setPhotos(response))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <LayoutScreen>
      {isLoading ? (
        <Loader title="Завантаження галереї ..." />
      ) : (
        <ListWithColumns
          numColumns={2}
          data={photos}
          containerStyle={styles.imagesContainer}
          renderItem={(item) => (
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: PHOTOS_URL + item }}
              />
            </View>
          )}
        />
      )}
    </LayoutScreen>
  );
}
