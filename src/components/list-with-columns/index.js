import React from "react";
import { View } from "react-native";

import { styles } from "./list-with-columns.styles";

export default function ListWithColumns({
  data,
  numColumns = 2,
  renderItem,
  containerStyle,
  wrapperStyle,
}) {
  const list = [];

  for (let i = 0; i < data.length; ) {
    if (i + numColumns - 1 < data.length) {
      list.push(
        <View key={i} style={[styles.wrapper, wrapperStyle]}>
          {Array(numColumns)
            .fill(null)
            .map((_, index) => (
              <React.Fragment key={index}>
                {renderItem(data[i + index])}
              </React.Fragment>
            ))}
        </View>
      );

      i += numColumns;
    } else {
      const countItems = data.length - i;
      const countEmptyItems = numColumns - countItems;

      list.push(
        <View key={i} style={[styles.wrapper, wrapperStyle]}>
          {Array(countItems)
            .fill(null)
            .map((_, index) => (
              <React.Fragment key={index}>
                {renderItem(data[i + index])}
              </React.Fragment>
            ))}
          {Array(countEmptyItems)
            .fill(null)
            .map((_, index) => (
              <View key={index} style={styles.emptyItem} />
            ))}
        </View>
      );

      i += countItems;
    }
  }

  return <View style={[styles.container, containerStyle]}>{list}</View>;
}
