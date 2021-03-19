import React, { useState, useEffect} from 'react'
import { observer } from 'mobx-react'

import { Form } from 'components'

// INTERFACES
import { IUser } from 'interfaces'

// STORE
import { layoutStore } from 'store'

const App: React.FC = () => {
  const { userInfo } = layoutStore

  useEffect(() => {
    layoutStore.setUser(1, 'sergey')
  }, [])

  return (
    <div>
      <Form user={userInfo}/>
    </div>
  )
}

export default observer(App)
