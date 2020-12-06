import React, { Dispatch, useState } from 'react'
import style from './index.module.scss'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'
import { All, INCREMENT_NUMBER, DECREMENT_NUMBER } from '@/store/actions/count'
const cx = classnames.bind(style)
interface Props {
  DECREMENT_NUMBER: any
}
interface MenuItem {
  name: string,
  path: string,
  icon: string,
  active: boolean
}

const Index: React.FC<Props> = props => {
  const { DECREMENT_NUMBER } = props
  const [menuList, setMenuList] = useState<MenuItem[]>([
    {
      name: 'animation',
      path: '/index',
      icon: 'mr-icon-animation',
      active: false
    },
    {
      name: 'svg',
      path: '/index2',
      icon: 'mr-icon-draw',
      active: false
    },
    {
      name: 'admin',
      path: '/index3',
      icon: 'mr-icon-pc',
      active: false
    },
    {
      name: 'blog',
      path: '/index4',
      icon: 'mr-icon-blog',
      active: false
    }
  ])
  const handleCount = () => {
    DECREMENT_NUMBER()
  }
  const handleRoute = (num: number) => {
    setMenuList(menuList.map((item, index) => {
      item.active = false
      if (num === index) {
        item.active = true
      }
      return item
    }))
  }
  return (
    <div className={cx('mr-page')}>
      <div className={cx('mr-page__grid')}>
        {
          menuList.map((item, index) => (
            <div key={ item.path } className={cx('mr-page__grid--item')}>
              <div className={cx({
                'mr-menu-icon': true,
                'active': item.active
              })} onClick={() => handleRoute(index)}>
                <svg className={cx('mr-icon')} aria-hidden="true">
                  <use href={`#${item.icon}`} />
                </svg>
              </div>
              <span className={cx('mr-menu-title')}>{ item.name.toUpperCase() }</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<All>) => ({
  INCREMENT_NUMBER: () => dispatch(INCREMENT_NUMBER()),
  DECREMENT_NUMBER: () => dispatch(DECREMENT_NUMBER())
})

const mapStateToProps = (state: any) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
