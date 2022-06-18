module.exports = (componentName) => `import React from 'react';
import style from './index.module.css';

export type ${componentName}Props = {

};

export const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <div className={style['${componentName}']}>
    </div>
  )
};
`;
