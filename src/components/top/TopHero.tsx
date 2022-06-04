import * as PIXI from 'pixi.js'
import { Suspense, useEffect, useState } from 'react'
import { createPixiApp } from "../../utils/pixiUtil"
import style from './TopHero.module.css'

type TopHeroProps = {}

const TopHero: React.FC<TopHeroProps> = ({}) => {
  useEffect(() => {
    const loader = new PIXI.Loader()
    loader.add("topHero", "./assets/topHero.png")
  }, [])

  const onLoad = (element: HTMLDivElement) => {
    if (!element) return;
    const app = createPixiApp(element);
    
    const topHero = PIXI.Sprite.from("./assets/topHero.png")
    topHero.x = 0
    topHero.y = 0
    topHero.width = app.screen.width
    topHero.height = app.screen.height
  
    app.stage.addChild(topHero)
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
