/**
 * Input prompt example
 */
"use strict";
const inquirer = require("inquirer");
const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs/promises");

const SRC_DIR = path.resolve(__dirname, "../../src");
// 現状すべて同じだが構造を変更したくなれば個別に変更する
const COMPONENT_DIR = path.resolve(SRC_DIR, "components");
const TEST_DIR = path.resolve(SRC_DIR, "components");
const MOCK_DIR = path.resolve(SRC_DIR, "components");
const STORY_DIR = path.resolve(SRC_DIR, "components");

const prefixUpper = (val) => val.charAt(0).toUpperCase() + val.slice(1);

const questions = [
  {
    type: "input",
    name: "componentName",
    message: "component name:",
    transformer: (val) => {
      // コンポーネント名を大文字始まりに変換
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
  },
  {
    type: "input",
    name: "resolveDir",
    message: "src/components/",
    default: function () {
      return "partials";
    },
  },
];

// TODO: consolaとかでキラキラ表示したい
const main = async () => {
  const fields = await inquirer.prompt(questions);
  const { componentName: _componentName, resolveDir } = fields;
  const componentName = prefixUpper(_componentName);
  console.log("generate component:");
  await generateComponent(componentName, resolveDir);
  console.log("component generated!");
};

const generateComponent = async (componentName, resolveDir) => {
  const templates = [
    {
      key: "component",
      dir: path.resolve(COMPONENT_DIR, resolveDir, componentName),
      name: path.resolve(COMPONENT_DIR, resolveDir, componentName, "index.tsx"),
      template: require("./templates/component")(componentName),
    },
    {
      key: "style",
      dir: path.resolve(COMPONENT_DIR, resolveDir, componentName),
      name: path.resolve(COMPONENT_DIR, resolveDir, componentName, "index.module.css"),
      template: require("./templates/style")(),
    },
    {
      key: "test",
      dir: path.resolve(TEST_DIR, resolveDir, componentName),
      name: path.resolve(TEST_DIR, resolveDir, componentName, "index.spec.tsx"),
      template: require("./templates/test")(componentName, resolveDir),
    },
    {
      key: "mock",
      dir: path.resolve(MOCK_DIR, resolveDir, componentName),
      name: path.resolve(MOCK_DIR, resolveDir, componentName, "mock.ts"),
      template: require("./templates/mock")(componentName),
    },
    {
      key: "storybook",
      dir: path.resolve(STORY_DIR, resolveDir, componentName),
      name: path.resolve(STORY_DIR, resolveDir, componentName, "index.stories.tsx"),
      template: require("./templates/storybook")(componentName, resolveDir),
    },
  ];
  makeFile(templates);
};

const makeFile = async (templates) => {
  await Promise.all(templates.map(({ dir }) => mkdirp(dir)));
  await Promise.all(templates.map(({ name, template }) => fs.writeFile(name, template)));
};

main();
