import React from 'react'
import { Input } from './style'
import PropTypes from 'prop-types'

export const CustomInput = ({ className, value, type, onChange, isVisible }) => {
  if (!isVisible) return <div />

  return <Input className={className}
    type={type}
    value={value}
    onChange={(e) => {
      if (typeof onChange === "function") {
        onChange(e)
      }
    }}
  />
}

CustomInput.propTypes = {
  onClick: PropTypes.func,
}
