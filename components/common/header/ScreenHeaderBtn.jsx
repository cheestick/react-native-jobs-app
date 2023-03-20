import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
  rounded = false,
}) => {
  const btnStyles = rounded
    ? { ...styles.btnContainer, ...styles.rounded }
    : { ...styles.btnContainer };

  return (
    <TouchableOpacity style={btnStyles} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
