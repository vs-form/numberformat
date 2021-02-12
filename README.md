# @vs-form/numberformat
Formatted Number Input Component for @vs-form/tailwind

## Install

```bash
npm install --save @vs-form/tailwind
npm install react-number-format --save
npm install --save @vs-form/numberformat
```

## Usage

#### **`index.tsx`**
```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import NumberComp from '@vs-form/numberformat'
import { RegisterComponent } from '@vs-form/tailwind'
RegisterComponent('numberformat', NumberComp)


ReactDOM.render(<App />, document.getElementById('root'))
```

#### **`App.tsx`**
```tsx
import React from 'react'
import './tailwind.out.css'
import { VsForm, ISchema } from '@vs-form/tailwind'

// define the schema
const schema: ISchema = {
  type: 'card',
  label: 'Example',
  children: [
    {
      type: 'field',
      label: 'Amount',
      inputComponent: {
        //@ts-ignore
        type: 'numberformat',
        required: true,
        field: 'amount',
        options: {
          //@ts-ignore
          thousandSeparator: true,
          prefix: '$ '
        }
      }
    },
    {
      type: 'field',
      label: 'Credit card',
      inputComponent: {
        //@ts-ignore
        type: 'numberformat',
        required: true,
        field: 'creditcard',
        options: {
          //@ts-ignore
          format: '#### #### #### ####',
          mask: '_'
        }
      }
    },
    {
      type: 'errorpanel'
    },
    {
      type: 'button',
      label: 'Save',
      onClick({ sm }) {
        sm.validateAll() 
        if (sm.Errors.length === 0) {
          alert(JSON.stringify(sm.Values, null, 2))
        }
      }
    }
  ]
}

const values = {
  amount: 123.8,
  creditcard: 4800510012009700
}

const App = () => {
  return <VsForm schema={schema} values={values} />
}

export default App
```


## License

MIT © [vs-form](https://github.com/vs-form)
