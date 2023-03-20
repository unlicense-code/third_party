const installDependencies = `npm i -g --prefix $(pwd) monaco-editor-core@next`;
// if you extend code-oss or code-oss forks via this monaco-editor always create a element above the editor element
// never mess with the editor element it self unless you know what your doing it mesures its size for example!
// vs/editor/common/services/languageService.js is the main integration point between monaco-editor and code-oss 
// it implements all other services everything is depending on that and feeding in that.

// all stuff under platform gets decorated via a instantiator inside monaco-editor-core/esm/vs/platform/instantiation/common/instantiation.js
// it does module linking and caching so the goal is to load eg: IService and get something else.
// This got done to have a internal system to request services as there where no module support
// conclusion plutform is total none needed in ESM replacement in base and editor are neeeded it implements the vscode api platform 
// 

// /vs/base/common/worker/simpleWorker.js
// vs/platform/instantiation/common/instantiation.js
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
/*
vs/editor/editor.worker wich uses base simpleWorker replaced by
// Replaces vscode-simple worker load directly language/ * /nameWorker.js
const ws = await import(moduleId); 
const messageHandler = ws.create((msg: any, transfer?: Transferable[]) => {
    (<any>globalThis).postMessage(msg, transfer);
}, null);

globalThis.onmessage = (e: MessageEvent) => messageHandler.onmessage(e.data, e.ports);

*/
export const buildConfigs = {
'core': ``

}
