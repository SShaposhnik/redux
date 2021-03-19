import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Form } from 'components'

// STORE
import { layoutStore } from 'store'

const App: React.FC = () => {
  const { userInfo } = layoutStore

  useEffect(() => {
    layoutStore.setUser(1, 'Sergey')
  }, [])

  return (
    <div>
      <Form user={userInfo}/>
    </div>
  )
}

export default observer(App)
