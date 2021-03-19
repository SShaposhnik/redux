import { ILayoutStore, User } from 'interfaces'
import {
  observable,
  configure,
  toJS,
  makeAutoObservable
} from 'mobx'

configure({ enforceActions: 'observed' })

class LayoutStore implements ILayoutStore{
  @observable user: User

  constructor() {
    makeAutoObservable(this)

    this.user = {
      id: null,
      name: null
    }
  }

  /**
   * Set user name
   * @param id
   * @param name
   */
  setUser(id: number, name: string): void {
    this.user = {
      id: id,
      name: name
    }
  }

  get userInfo(): User {
    return toJS(this.user)
  }
}

export { LayoutStore }
export default new LayoutStore()