import React, { Dispatch } from 'react'
import style from './index.module.scss'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'
import { All, INCREMENT_NUMBER, DECREMENT_NUMBER } from '@/store/actions/count'
const cx = classnames.bind(style)
interface Props {
  DECREMENT_NUMBER: any
}

const Index: React.FC<Props> = props => {
  const { DECREMENT_NUMBER } = props

  const handleCount = () => {
    DECREMENT_NUMBER()
  }
  return (
    <div className={cx('mr-page')}>
      MIRACLE
      <button onClick={handleCount}>点击</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<All>) => ({
  INCREMENT_NUMBER: () => dispatch(INCREMENT_NUMBER()),
  DECREMENT_NUMBER: () => dispatch(DECREMENT_NUMBER())
})

const mapStateToProps = (state: any) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
