import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $darkBlue: '$secondaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});


class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }

  handleThemePress = (color) => {
    this.props.dispatch(changePrimaryColor(color));
    // Nav back to Home instead of goBack to prev screen
    this.props.navigation.navigate('Home');
    // this.props.navigation.goBack();
    // console.log('object change theme color to ', color);
  }

  renderThemeList = () => {
    const themesArray = [
      { text: 'Dark Blue', color: '$darkBlue' },
      { text: 'Blue', color: '$blue' },
      { text: 'Green', color: '$green' },
      { text: 'Orange', color: '$orange' },
      { text: 'Purple', color: '$purple' },
    ];

    return themesArray.map(theme => (
      <View key={theme.text}>
        <ListItem
          text={theme.text}
          onPress={() => this.handleThemePress(styles[theme.color])}
          selected
          checkmark={false}
          iconBackground={styles[theme.color]}
        />
        <Separator />
      </View>
    ));
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        {this.renderThemeList()}
      </ScrollView>
    );
  }
}

export default connect()(Themes);
