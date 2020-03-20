import {observable} from "mobx";

export type IBlankStore = {
  name: string
};

export class BlankStore {

  @observable private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export default new BlankStore('BlankStore');
