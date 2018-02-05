import ButtonGroup from './'

export default {
  component: ButtonGroup,
  props: {
    vertical: false,
    onClickOption: (opt) => console.log(opt),
    options: [
      {label: 'General Exam and Clean', value: 1},
      {label: 'Toothache', value: 2},
      {label: 'Loose Filling', value: 3},
      {label: 'Loose Crown', value: 4},
      {label: 'Teeth Whitening', value: 5}
    ]
  }
}
