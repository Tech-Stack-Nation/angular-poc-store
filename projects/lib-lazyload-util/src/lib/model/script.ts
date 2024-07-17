export enum ScriptLoadingState {
    INIT,
    LOADING,
    FINISHED,
    ERROR,
}

export interface Script {
    src: string;
    state: ScriptLoadingState;
}

export interface AppPreloadScript {
    src: string;
    children?: AppPreloadScript[];
}