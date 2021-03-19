import React from 'react'
import { IFormProps } from 'interfaces'
import { layoutStore } from 'store'


const Form: React.FC<IFormProps> = (props) => {
  const {
    user
  } = props

  const { userInfo } = layoutStore

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    layoutStore.setUser(1, event.target.value)
  }

  const clickHandler = () => {
    layoutStore.setUser(1, '1')
  }

  return (
    <div>
      ID: {user.id} <br/>
      Имя: {user.name}

      <input type='text' value={userInfo.name ?? ''} onChange={handleChange}/>
      <button onClick={clickHandler}>
        ТЫК
      </button>
    </div>
  )
}

export default Form