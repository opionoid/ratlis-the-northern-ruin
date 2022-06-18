import React from 'react';
import { ScriptTest } from './index';
import MOCK_SCRIPT_TEST_PROPS from './mock';
import { test, expect } from "@playwright/experimental-ct-react";

test('test', async ({ mount }) => {
  const component = await mount(<ScriptTest {...MOCK_SCRIPT_TEST_PROPS}/>);
  // const paragraph = component.locator("role=paragraph");
  // expect(await paragraph.textContent()).toBe("foo");
});
