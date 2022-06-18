const { makeMockPropsName } = require("../utils");

module.exports = (componentName, dirName) => `import React from 'react';
import { ${componentName} } from './index';
import ${makeMockPropsName(componentName)} from './mock';
import { test, expect } from "@playwright/experimental-ct-react";

test('${dirName}', async ({ mount }) => {
  const component = await mount(${"<" + componentName} {...${makeMockPropsName(componentName)}}/>);
  // const paragraph = component.locator("role=paragraph");
  // expect(await paragraph.textContent()).toBe("foo");
});
`;
