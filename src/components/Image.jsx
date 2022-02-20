import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { profilePic } from "../img/profile.png";


const styles = StyleSheet.create({
  profile_img: {
    paddingTop: 50,
  }
});

const ImageProfile = () => {
  return (
      <Image
        style={styles.profile_img}
        source={profilePic}
      />
  );
}

export default ImageProfile;