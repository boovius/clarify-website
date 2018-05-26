import React from 'react'
import IconLink from './IconLink'

const DownArrowLink = ({next, ratio}) => (
  <IconLink style={{marginLeft:`${ratio * 80}%`}} next={next} icon="angle-double-down" />
)

export default DownArrowLink
