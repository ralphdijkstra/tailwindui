import { Component } from "vue";

export interface Navigation {
    name: string,
    href: string,
    icon?: Component,
    children?: Navigation[],
    notifications?: number
}