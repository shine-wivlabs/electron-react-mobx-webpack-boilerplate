import React, { ReactNode } from 'react';

interface Props {
  children : ReactNode
}

export default class App extends React.Component<Props> {
  constructor(props:Props){
    super(props);

  }
  render() {

    return <>{this.props.children}</>;
  }
}
