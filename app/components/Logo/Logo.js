import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, Text, Keyboard, Animated, Platform, Easing, TouchableOpacity } from 'react-native';

import styles from './styles';


const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  }

  state = {
    isSpinning: false,
  }

  containerImageSize = new Animated.Value(styles.$largeContainerSize)

  imageSize = new Animated.Value(styles.$largeImageSize)

  spinValue = new Animated.Value(0)

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

  handleTouch = () => {
    this.setState({ isSpinning: true });
    this.props.fetchData();

    // First set up animation
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        // useNativeDriver: true,
      },
    ).start(() => {
      this.setState({ isSpinning: false });
      this.spinValue.setValue(0);
    });
  }

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageSize, height: this.containerImageSize },
    ];

    // Second interpolate beginning and end values (in this case 0 and 1)
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    let imageStyle = [
      styles.logo,
      { width: this.imageSize },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    if (this.state.isSpinning === true) {
      imageStyle = [
        styles.logo,
        { transform: [{ rotate: spin }] },
      ];
    }

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>

          <ImageBackground
            resizeMode="contain"
            style={styles.backgroundImage}
            source={require('./images/background.png')}
          >
            <TouchableOpacity onPress={this.handleTouch}>
              <Animated.Image
                resizeMode="contain"
                style={imageStyle}
                source={require('./images/logo.png')}
              />
            </TouchableOpacity>
          </ImageBackground>

        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

Logo.propTypes = {
  fetchData: PropTypes.func,
};


export default Logo;
