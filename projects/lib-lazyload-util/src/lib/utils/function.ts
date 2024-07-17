import { AppPreloadScript } from "../model/script";

export function getScriptsInFlatList(scripts: AppPreloadScript[], newList: AppPreloadScript[] = []): AppPreloadScript[] {
    for (let i = 0; i < scripts.length; i++) {
        if(scripts[i].children) {
            getScriptsInFlatList(scripts[i].children!, newList);
        } else {
            newList.push(scripts[i]);
        }
    }
    return newList;
}