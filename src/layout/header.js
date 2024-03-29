import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "./layout.styles";

const links = [
  { icon: "home", link: "Home", text: "Головна" },
  { icon: "photo", link: "PhotoGallery", text: "Фотогалерея" },
  { icon: "user", link: "Profile", text: "Профіль" },
];

export default function Header({ navigation, route }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Image
          style={styles.headerLogo}
          source={require("../assets/logo-Zhytomyr-Polytechnic.jpg")}
        />
        <Text style={styles.headerTitle}>FirstMobileApp</Text>
      </View>
      <View style={styles.headerContainerLinks}>
        {links.map((item, index) => (
          <Pressable
            key={index}
            style={styles.headerLink}
            onPress={() => navigation.navigate(item.link)}
          >
            <Icon
              name={item.icon}
              size={20}
              color={route.name === item.link ? "#0078ff" : "#8c8c8c"}
            />
            <Text
              style={
                route.name === item.link
                  ? styles.headerActiveLinkText
                  : styles.headerLinkText
              }
            >
              {item.text}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
