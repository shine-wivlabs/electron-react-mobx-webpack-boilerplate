import * as React from 'react';
import {inject, observer} from "mobx-react";

export interface IBlankProps {
  rootStore?: any
}

@inject('rootStore')
@observer
export default class BlankPage extends React.Component<IBlankProps> {
  public render() {
    return (
      <div>
        <h1>Hello 여기는 Blank 페이지 mobx store 전달 값 : {this.props.rootStore.name}</h1>
      </div>
    );
  }
}

