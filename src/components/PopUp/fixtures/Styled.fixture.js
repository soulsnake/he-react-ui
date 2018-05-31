import React from 'react';
import PopUp from '../';

export default {
  component: PopUp,
  props: {
    showing: true,
    modal: true,
    style: {
      backgroundImage: "url('https://i.imgur.com/5JGZrYe.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      borderRadius: '100%',
      color: '#00F9',
      width: '200px',
      height: '200px',
      padding: '10%',
      fontSize: '22px',
      fontWeight: 'bolder',
    },
  },
  children: (
    <div>
      <p>Wow!</p>
      <p>Look how versatile you can make the pop-up window.</p>
    </div>
  ),
};
