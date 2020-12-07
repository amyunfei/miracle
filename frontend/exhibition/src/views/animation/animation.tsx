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
const imgArr: string[] = [bg1, bg2, bg3, bg4, bg5, bg6]

interface MouseMoveEventType {
  clientX: number
}
interface imgsType {
  offset: string,
  blur: string,
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

  const handleMoMouseMove = (event: MouseMoveEventType) => {
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

  return (
    <div className={cx('mr-animation')} onMouseMove={handleMoMouseMove}>
      <div className={cx('mr-animation__bilibili')}>
        {
          imgs.map((item, index) => (
            <div key={index} className={cx('mr-animation__bilibili--item')}>
              <img src={ item.imgsrc } className={cx('mr-animation__bilibili--img')} style={ {transform: item.offset, filter: item.blur} } />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Animation