// @flow
import CarouselIndicator from '../';

export default {
  component: CarouselIndicator,
  url: '/',
  parentLayout: { marginTop: 40 },
  props: {
    length: 4,
    current: 1,
    showNext: true,
  },
};
