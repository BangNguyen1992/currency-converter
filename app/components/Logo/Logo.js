import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';


const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  }

  containerImageSize = new Animated.Value(styles.$largeContainerSize)

  imageSize = new Animated.Value(styles.$largeImageSize)

  componentDidMount() {
    const showEvent = (Platform.OS === 'android') ? 'keyboardDidShow' : 'keyboardWillShow';
    const hideEvent = (Platform.OS === 'android') ? 'keyboardDidHide' : 'keyboardWillHide';

    this.keyboardShowListener = Keyboard.addListener(showEvent, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideEvent, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageSize, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageSize, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageSize, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageSize, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageSize, height: this.containerImageSize },
    ];

    const imageStyle = [
      styles.logo,
      { width: this.imageSize },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            resizeMode="contain"
            style={styles.backgroundImage}
            source={require('./images/background.png')}
          >

            <Animated.Image
              resizeMode="contain"
              style={imageStyle}
              source={require('./images/logo.png')}
            />

          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

Logo.propTypes = {

};


export default Logo;
