import { css as glamor } from 'glamor'
import { darken } from 'polished'
import { dullLavendar } from '../../assets/styles/colors'

export const primaryColor = dullLavendar
export const secondaryColor = 'white'

export const perspective = glamor({backgroundColor: `${darken(0.05, primaryColor)}`})
export const exercise = glamor({backgroundColor: `${darken(0.1, primaryColor)}`})

export const baseStyles = glamor({
  position: 'absolute',
  height: '100%',
  width: '100%',
  color: secondaryColor,
  backgroundColor: primaryColor,
})
