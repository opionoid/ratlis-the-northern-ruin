import { Suspense, useEffect, useState } from 'react'
import style from './TopHero.module.css'

type TopHeroProps = {}

const TopHero: React.FC<TopHeroProps> = ({ }) => {
  const onLoad = (element: HTMLDivElement) => {
    if (!element) return;
    console.log('element:', element)
  }

  return (
    <Suspense fallback={<div>TODO: Loading</div>}>
      <div ref={onLoad} />
      <h1 aria-label='TODO' className={style.title}>
        <span className={style.head} aria-hidden>TO</span>
        <span className={style.tail} aria-hidden>DO</span>
      </h1>
    </Suspense>
  )
}

export default TopHero;
