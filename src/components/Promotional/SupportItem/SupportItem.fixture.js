import SupportItem from '.';

export default {
  component: SupportItem,
  props: {
    image: {
      src: 'http://res.publicdomainfiles.com/pdf_view/2/13491430814060.png',
      alt: 'A bandage.',
    },
    name: 'Medical Bandages',
    extra: 'Adhesive only',
  },
};
