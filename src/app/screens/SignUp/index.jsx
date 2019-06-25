import * as React from 'react';
import Content from './content'

import './style.scss';


export default (props) => {
  const toSignIn = () => props.history.push('/sign-in');

  return (
    <div className="sign-up">
      <Content
        toSignIn={toSignIn}
      />
    </div>
  )
}
