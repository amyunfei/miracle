import React from 'react'
import classnames from 'classnames/bind'
import style from './index.module.scss'
const cx = classnames.bind(style)

interface Prors {
  text: string
}

const Spotlight: React.FC<Prors> = (props) => {
  const { text } = props 
  return (
    <div className={cx('mr-comp-spotlight')} data-text={ text }>
      { text }
    </div>
  )
}

export default Spotlight