import { Component } from "vue";

export interface Route {
    name: string,
    path: string,
    component: Component
    type: RouteTypeEnum
}

export enum RouteTypeEnum {
    Link = 1,
    Route = 2,
}