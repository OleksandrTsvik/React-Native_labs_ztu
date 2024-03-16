import { FlatList, View } from "react-native";

import { styles } from "./photo-gallery.styles";
import LayoutScreen from "../../layout/layout.screen";

export default function PhotoGalleryScreen() {
  return (
    <LayoutScreen>
      <FlatList
        data={Array(20).fill(null)}
        numColumns={2}
        contentContainerStyle={styles.imagesContainer}
        columnWrapperStyle={styles.imagesColumnWrapper}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <View style={styles.imageItem} />}
      />
    </LayoutScreen>
  );
}
