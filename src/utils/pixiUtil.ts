import * as PIXI from 'pixi.js';

export const createPixiApp = (element: HTMLElement, options?: PIXI.IApplicationOptions) => {
  const app = new PIXI.Application({
    width: options?.width || element.clientWidth / window.devicePixelRatio,
    height: options?.height || element.clientHeight / window.devicePixelRatio,
    backgroundColor: options?.backgroundColor || 0x1099bb,
    resolution: options?.resolution || window.devicePixelRatio || 1,
    antialias: options?.antialias || true,
    backgroundAlpha: options?.backgroundAlpha || 0, // デフォルトは透過させない
    // resizeTo: window TODO: Retina だと動かない、CSSでサイズ指定したDOMのほうがいいかも
    ...options,
  });
  element.appendChild(app.view);

  return app;
};
