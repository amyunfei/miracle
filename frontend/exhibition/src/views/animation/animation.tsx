import React, { useState } from 'react'
import style from './animation.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(style)

// 图片
import bg1 from '@/assets/images/animation_bg_1.png'
import bg2 from '@/assets/images/animation_bg_2_1.png'
import bg3 from '@/assets/images/animation_bg_3.png'
import bg4 from '@/assets/images/animation_bg_4.png'
import bg5 from '@/assets/images/animation_bg_5.png'
import bg6 from '@/assets/images/animation_bg_6.png'

import jap1 from '@/assets/images/parallax-1.svg'
import jap2 from '@/assets/images/parallax-2.svg'
import jap3 from '@/assets/images/parallax-3.svg'
import jap4 from '@/assets/images/parallax-4.svg'
const imgArr: string[] = [bg1, bg2, bg3, bg4, bg5, bg6]
const imgArr2: string[] = [jap1, jap2, jap3, jap4].reverse()

interface MouseMoveEventType {
  clientX: number
}
interface imgsType {
  offset: string,
  blur?: string,
  imgsrc: string
}

const Animation: React.FC = () => {

  const [imgs, setImgs] = useState(
    imgArr.map((item): imgsType => {
      return {
        offset: '0px',
        blur: '0px',
        imgsrc: item
      }
    })
  )

  const [imgs2, setImgs2] = useState(
    imgArr2.map((item): imgsType => {
      return {
        offset: '0px',
        imgsrc: item
      }
    })
  )

  const handleBMouseMove = (event: MouseMoveEventType) => {
    const percentage = event.clientX / window.outerWidth
    let offset = 10 * percentage / 5
    const blur = 20
    setImgs(imgs.map((item, index) => {
      offset *= 3
      const blurVal = (Math.pow((index / imgs.length - percentage), 2) * blur)
      return {
        ...item,
        offset: `translateX(${offset}px)`,
        blur: `blur(${blurVal}px)`
      }
    }))
  }

  const handleSMouseMove = (event: MouseMoveEventType) => {
    const percentage = event.clientX / window.outerWidth
    let offset = 600 * percentage
    setImgs2(imgs2.map((item, index) => {
      offset *= 0.7
      return {
        ...item,
        offset: `translateX(${offset}px)`
      }
    }))
  }

  return (
    <div className={cx('mr-animation')}>
      <div className={cx('mr-animation__bilibili')} onMouseMove={handleBMouseMove}>
        {
          imgs.map((item, index) => (
            <div key={index} className={cx('mr-animation__bilibili--item')}>
              <img src={ item.imgsrc } className={cx('mr-animation__bilibili--img')} style={ {transform: item.offset, filter: item.blur} } />
            </div>
          ))
        }
      </div>
      <div className={cx('mr-animation__jap')} onMouseMove={handleSMouseMove}>
        {
          imgs2.map((item, index) => (
            <div key={index} className={cx('mr-animation__jap--item')}>
              <img src={ item.imgsrc } className={cx('mr-animation__jap--img')} style={ {transform: item.offset, filter: item.blur} } />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Animation