import { Route } from "@angular/router";

export class PAGE {
    showInMenu: boolean;
    route: Route;
    linkText: string;
    module: string;

    constructor(route: Route, linkText: string, module: string, showInMenu: boolean = true) {
        this.route = route;
        this.linkText = linkText;
        this.showInMenu = showInMenu;
        this.module = module;
    }

    public get fullLink() {
        return this.module ? this.module + '/' + this.route.path : this.route.path;
    }

    public get partialLink() {
        return this.route.path;
    }

}
