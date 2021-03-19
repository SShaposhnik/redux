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

class UserStore implements ILayoutStore{
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

  get userInfo(): IUser  {
    return toJS(this.user)
  }

}

export { UserStore }
export default new UserStore