import * as Colors from './colors';

export const CommonStyles = {
  texts: {
    title: {
      fontSize: 36,
      fontWeight: '600',
      color: Colors.TEXT_COLOR.PRIMARY,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 24,
      fontWeight: '500',
      color: Colors.TEXT_COLOR.PRIMARY,
      textAlign: 'center',
    },
    paragraph: {
      fontSize: 18,
      fontWeight: '400',
      color: Colors.TEXT_COLOR.PRIMARY,
    },
    link: {
      fontSize: 18,
      fontWeight: '400',
      color: Colors.TEXT_COLOR.LINK,
    },
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
};
