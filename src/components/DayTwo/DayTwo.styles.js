import { css as glamor } from 'glamor'
import { darken } from 'polished'

export const cardFlow = glamor({
  position: 'absolute',
  height: '100%',
  width: '100%',
})
export const primaryColor = '#B28B20'
export const secondaryColor = 'white'

export const perspective = glamor({backgroundColor: `${darken(0.05, primaryColor)}`})
export const exercise = glamor({backgroundColor: `${darken(0.1, primaryColor)}`})

export const baseStyles = glamor({
  position: 'absolute',
  height: '100%',
  width: '100%',
  color: 'white',
  backgroundColor: primaryColor,
})
