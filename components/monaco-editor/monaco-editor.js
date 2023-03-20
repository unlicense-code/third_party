const installDependencies = `npm i -g --prefix $(pwd) monaco-editor-core@next`;
/**
 * Notes:
 * languages.registerTokenProvider => basic-languages and multiple languages.register* calls if languages/*
 *
 * editor.MonacoWebWorker can provide a proxy to abitary file gets used to send files 
 *  'monaco-editor-core/esm/vs/editor/editor.worker'; .initalize((ctx, createData) => new <*>Worker(ctx, createData))
 * 
 * The Monarch Languages inside monaco-editor do rename monaco-editor-core's editor.main.js => edcore.main.js to inject additions
 * Then it builds with esbuild so 
 * replacing the build process with keeping editor.main.js as is and then add our content 
 * Build a Executeable build of monaco-editor-core@next via removing the css imports use the min css or concat all css
 * patch it if needed. 
 * in case of monarch the "language/**{/*.contribution.js,*.worker.js}" contains the bindings
 *  /common/lspLanguageFeatures.js contains the language server integration from code-oss
 *  NOTE: importent a lsp lang registers also the MarkupKinds it is responsible for this gets importent later!
 * in case of basic-languages/_.contribution.js holds the bindings and monaco-contribution.js is a lazy lang loader
 * import { languages, Emitter, IEvent } from '../../fillers/monaco-editor-core';
  {
	languages, // everywhere but not in workers
	editor,
	Emitter,// not inside lsp
  editor,// not inside lsp but in all workers
  IMarkdownString,
	Uri, // every where
	Position,
	IRange,
	Range,
	CancellationToken,
	IDisposable, // every where
	MarkerSeverity,
	IEvent
}
 */

export const buildConfigs = {
'core': ``

}
