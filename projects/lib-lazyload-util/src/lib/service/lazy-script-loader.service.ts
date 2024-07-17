import { Injectable, signal, WritableSignal } from '@angular/core';
import { AppPreloadScript, Script, ScriptLoadingState } from '../model/script';

// Borrowed service from github repo someones else
// https://github.com/TechieWithBeard/lazyloading
//TODO: refactor this into typed state
//TODO: User renderer 2 for better / safe performance
@Injectable({
  providedIn: 'root'
})
export class LazyScriptLoaderService {

  readonly scripts: WritableSignal<Script[]> = signal<Script[]>([]);

  constructor() { }

  load(scripts: AppPreloadScript[]): Promise<Script[]> {
    return Promise.all(scripts.map((script) => this.loadScript(script)));
  }

  loadScript(scriptToLoad: AppPreloadScript): Promise<Script> {
    return new Promise((resolve, reject) => {
        const scripts = this.scripts();

        // Loading script from a list
        let loadedScript = scripts.find((script) => script.src === scriptToLoad.src);

        // Try if scripts is in list, if not then add one as init state
        if(!loadedScript) {
          loadedScript = { src: scriptToLoad.src, state: ScriptLoadingState.INIT};
          scripts.push(loadedScript)
          this.scripts.update(() => [...scripts]);
        }

        // resolve if already loaded
        if (loadedScript.state === ScriptLoadingState.FINISHED || loadedScript.state === ScriptLoadingState.ERROR) {
            resolve(loadedScript);
        } else {
            // load script
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = name + 'dynamic_script';
            script.src = loadedScript.src;
            
            //if (name == 'bootstrap') {
              //script.defer = true;
            //   script.integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            //   script.crossOrigin="anonymous"
            // }

            // cross browser handling of onLoaded event
            if (document.getElementById(scriptToLoad.src + 'dynamic_script') == null) {  // IE
                script.onload = () => this.resolveScript(scriptToLoad, resolve);
            } else {  // Others
                script.onload = () => this.resolveScript(scriptToLoad, resolve);
            }
            script.onerror = (error: any) => resolve(this._updateScriptInList(scriptToLoad.src, ScriptLoadingState.ERROR));
            // finally append the script tag in the DOM
            document.getElementsByTagName('head')[0].appendChild(script);
            this._updateScriptInList(scriptToLoad.src, ScriptLoadingState.LOADING)
        }
    });
  }

  loadExternalStyles(styleUrl: string,integrity?:string,crossorigin?:string) {
    return new Promise((resolve, reject) => {
        if (document.getElementById(styleUrl + "_style") == null) {
            const styleLink = document.createElement('link');
            styleLink.rel = 'stylesheet';
            styleLink.href = styleUrl;
            styleLink.id = styleUrl + "_style";
            styleLink.type = 'text/css';
            if(integrity){
              styleLink.integrity=integrity;
            }
            if(crossorigin){
              styleLink.crossOrigin=crossorigin;
            }
            let bootstrapfer:any = document.getElementsByTagName('link')[0];
            bootstrapfer.parentNode.insertBefore(styleLink, bootstrapfer);
        }
    });
  }

  private resolveScript(script: AppPreloadScript, resolve: Function) {
    const resolvedScript = this._updateScriptInList(script.src, ScriptLoadingState.FINISHED);

    if(script.children) {
      Promise.all(script.children!.map((subscript) => this.loadScript(subscript)))
      return resolve(resolvedScript);
    } else {
      return resolve(resolvedScript);
    }
  } 
  
  private _updateScriptInList(name: string, state: ScriptLoadingState): Script {

    const scripts = this.scripts();

    let loadedScriptIndex = scripts.findIndex((script) => script.src === name);

    if(loadedScriptIndex === -1) {
      throw new Error('Trying to get script which is not listed');
    }

    scripts[loadedScriptIndex].state = state;
    this.scripts.update(() => [...scripts]);

    return scripts[loadedScriptIndex];
  }
}
