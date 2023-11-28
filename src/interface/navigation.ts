import { Component } from "vue";

export interface Navigation {
    name: string,
    href: string,
    icon?: Component,
    current: boolean,
    children?: Navigation[],
    notifications?: number
}