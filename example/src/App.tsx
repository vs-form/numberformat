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
