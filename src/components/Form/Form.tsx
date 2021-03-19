import React from 'react'
import { IFormProps } from 'interfaces'


const Form: React.FC<IFormProps> = (props) => {
  const {
    user
  } = props

  return (
    <div>
      ID: {user.id}
      Имя: {user.name}
    </div>
  )
}

export default Form