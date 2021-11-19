/* eslint-disable no-undef */
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'generate component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/index.ts',
        templateFile: '../templates/generate-component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: '../templates/generate-component/default.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: '../templates/generate-component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: '../templates/generate-component/styles.ts.hbs'
      }
    ]
  })
}
