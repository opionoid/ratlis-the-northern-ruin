import React from 'react';
import { SampleTest } from './index';
import MOCK_SAMPLE_TEST_PROPS from './mock';
import { test, expect } from "@playwright/experimental-ct-react";

test('test', async ({ mount }) => {
  const component = await mount(<SampleTest {...MOCK_SAMPLE_TEST_PROPS}/>);
  // const paragraph = component.locator("role=paragraph");
  // expect(await paragraph.textContent()).toBe("foo");
});
