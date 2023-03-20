# third_party
All 3th ThirdParty Integrations of existing projects that we incremental upgrade.

## Content
This Repo Contains a so called Code Tour that can be used with the Unlicense Code Editor or any other Code OSS Based Editor eg: vscode and forks. 
The Code Tour explains the road map as also explains the changes in a human understand able way. 

## How to use?
This is designed to get used with the NodeJS or the B8G Engine of the Stealify Lang 
most efficent and fast via the interactive repl.

### Nodejs
```
node --input-type=module -e "(await import('node:repl')).start()"
```

```js
import('./build-components.js').then(build => build.generate())
```

### B8G via Just
build run just

## Contributing
To add a 3th party dependencie always favor ESM and if possible import the entrypoints in a understandable way. 

most best simple add a script that builds the 3th party component as modlet. eg: 
- monaco-editor-core/monaco-editor-core.js
- monaco-editor-languages-monarch/monaco-languages-monarch.js
- monaco-editor-languages-textmate/monaco-languages-textmate.js
- awesomeos-monaco-editor/awesomeos-monaco-editor - The AwesomeOS ScriptAble Monaco Editor. a drop in replacement for code-oss
  - can be used as aliased build dependencie inside vscode forks to implement the AwesomeOS Component System.
- code-oss-common/code-oss-common
- code-oss-server/code-oss-server


