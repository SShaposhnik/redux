import { ILayoutStore, IUser } from 'interfaces'
import {
  observable,
  computed,
  action,
  configure,
  runInAction,
  toJS,
  makeObservable
} from 'mobx'

configure({ enforceActions: 'observed' })

class LayoutStore implements ILayoutStore{
  user: IUser

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action,
      userInfo: computed
    })

    this.user = {
      id: null,
      name: null
    }
  }

  setUser(id: number, name: string): void {
    this.user = {
      id: id,
      name: name
    }
  }

  get userInfo() {
    return toJS(this.user)
  }

}

export { LayoutStore }
export default new LayoutStore