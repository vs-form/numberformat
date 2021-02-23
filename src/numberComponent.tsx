import React from 'react'
import NumberFormat, {NumberFormatProps} from 'react-number-format';

import { ElementProps, IDefaultStyles, IDataComponent } from '@vs-form/tailwind'


export interface IFormattedNumberComponent extends IDataComponent {
  type: 'numberformat',
  options: NumberFormatProps,
}

export const NumberComp = (props: ElementProps) => {
  const { data, themeColor, addProps, validateOnBlur } = props
  const comp = (props.comp as unknown) as IFormattedNumberComponent
  comp.dataType = 'float'

  const style: IDefaultStyles = {
    main: {
      classes: {
        margin: 'mx-2',
        padding: 'px-3 py-2',
        display: 'flex',
        position: 'relative',
        boxShadow: 'shadow',
        borderWidth: 'border',
        borderRadius: 'rounded',
        lineHeight: 'leading-tight',
        focus: {
          boxShadow: 'focus:shadow-outline',
          outline: 'focus:outline-none'
        }
      },
      class: themeColor().focusWiBorderColor
    },
    styleInput: {
      classes: {
        width: 'w-full',
        textColor: 'text-gray-700',
        borderWidth: 'border-0',
        appearance: 'appearance-none',
        padding: 'py-1 px-4 pr-8',
        focus: {
          outline: 'focus:outline-none',
          borderWidth: 'focus:border-0',
          appearance: 'focus:appearance-none',
          boxShadow: 'focus:shadow-none',
          ringWidth: 'focus:ring-0'
        }
      }
    }
  }

  const [fmtValue, setFmtValue] = React.useState(data.value())

  const handleChange = (values: any) => {
    const {formattedValue, value} = values;
    setFmtValue(formattedValue)
    data.updateValue(value)
  }
  const m = props.mergeStyles(style)

  return (
    <div {...m.main}>
      <NumberFormat
        {...m.styleInput}
        {...comp.options}
        value={fmtValue}
        onBlur={validateOnBlur}
        onValueChange={(value: number) => handleChange(value)}
        {...addProps()}
      />
    </div>
  )
}
