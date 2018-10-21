import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  smallText: {
    color: '$white',
    fontSize: `$primaryFontSize * ${3 / 5}`,
    textAlign: 'center',
  },
});

export default styles;