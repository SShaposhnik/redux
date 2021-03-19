export interface IFormProps{
  user: User
}

export type User = {
  id: number | null,
  name: string | null
}