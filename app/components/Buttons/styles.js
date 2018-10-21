import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: `$deviceWidth * ${0.08}`,
    margin: 11,
  },
  text: {
    color: '$white',
    fontSize: `$primaryFontSize * ${3 / 4}`,
    fontWeight: '300',
    paddingVertical: 20,
  },
});

export default styles;
