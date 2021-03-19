import { User } from "interfaces/common/common"

export interface ILayoutStore {
  user: User,
  setUser(id: number, name: string): void,
  userInfo: User
}