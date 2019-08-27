import { ClickHandler, OnActionCallback } from 'angular2-toaster';

export interface NetworkData {
    message: string;
    status: number;
}

export interface ToastConfig {
    title?: string;
    body?: any;
    onShowCallback?: OnActionCallback;
    onHideCallback?: OnActionCallback;
    clickHandler?: ClickHandler;
    networkData?: NetworkData;
}
