import React from 'react'
import style from './index.module.scss'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'
const cx = classnames.bind(style)

const Index: React.FC = (props: any) => {
  const { dispatch } = props

  const handleCount = () => {
    dispatch({
      type: 'COUNT_ADD',
      payload: {}
    })
  }
  return (
    <div className={cx('mr-page')}>
      MIRACLE
      <button onClick={handleCount}>点击</button>
    </div>
  )
}

export default connect()(Index)
