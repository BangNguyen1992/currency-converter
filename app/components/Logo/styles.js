import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 1.5;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    width: imageWidth / 2,
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
