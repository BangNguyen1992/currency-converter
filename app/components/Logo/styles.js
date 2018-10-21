import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  image: {
    width: '$largeImageSize',
  },
  text: {
    // flex: 1,
    marginTop: 15,
    fontWeight: '600',
    fontSize: `$deviceWidth * ${0.08}`,
    letterSpacing: -0.5,
    color: '$white',
  },
});

export default styles;
