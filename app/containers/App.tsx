import React, { ReactNode } from 'react';
import {getDirection} from '../helpers/Utils';


interface Props {
  children : ReactNode
}

export default class App extends React.Component<Props> {
  constructor(props:Props){
    super(props);
    const direction = getDirection();
        if (direction.isRtl) {
            document.body.classList.add('rtl');
            document.body.classList.remove('ltr');
        } else {
            document.body.classList.add('ltr');
            document.body.classList.remove('rtl');
        }
  }
  render() {

    return <>{this.props.children}</>;
  }
}
