import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import NumberComp from '@vs-form/numberformat'
import { RegisterComponent } from '@vs-form/tailwind'
RegisterComponent('numberformat', NumberComp)


ReactDOM.render(<App />, document.getElementById('root'))
