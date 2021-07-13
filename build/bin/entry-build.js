var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;

var OUTPUT_PATH = path.join(__dirname, '../../src/components/main.ts');
var IMPORT_TEMPLATE = 'import {{name}} from \'./{{package}}/index\';';
var INSTALL_COMPONENT_TEMPLATE = '   {{name}}';
var MAIN_TEMPLATE = `
{{include}}
const components = [
{{install}}
];
function install(app: any) {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}
export default {
    install
}
`;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];

ComponentNames.forEach(name => {
    var componentName = uppercamelcase(name);

    includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
        name: componentName,
        package: name
    }));
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
        name: componentName,
    }));
});

var template = render(MAIN_TEMPLATE, {
    include: includeComponentTemplate.join(endOfLine),
    install: installTemplate.join(',' + endOfLine),
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);

