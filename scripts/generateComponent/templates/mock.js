const { makeMockPropsName, makeInterfaceName } = require("../utils");

module.exports = (componentName) => `import { ${makeInterfaceName(componentName)} } from './index';

const ${makeMockPropsName(componentName)}: ${makeInterfaceName(componentName)} = {};
export default ${makeMockPropsName(componentName)};
`;
