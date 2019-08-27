import { Injectable } from '@angular/core';
import { Toast, ToasterService } from 'angular2-toaster';
import { ToastConfig } from '../interface/toast-config.interface'

export enum ToastMessageType {
    success = 'success',
    error = 'error',
    warning = 'warning'
}


@Injectable()
export class ToastMessageService {
    constructor(private toasterService: ToasterService) {}

    public showErrorMessage(config: ToastConfig) {
        const toast: Toast = {
            type: ToastMessageType.error,
            title: config.title,
            body: config.body,
            timeout: 6000
        };
        this.showToast(toast);
    }

    public showWaringMessage(config: ToastConfig) {
        const toast: Toast = {
            type: ToastMessageType.warning,
            title: config.title,
            body: config.body,
            timeout: 10000
        };
        this.showToast(toast);
    }

    public showSuccessMessage(config: ToastConfig) {
        const toast: Toast = {
            type: ToastMessageType.success,
            title: config.title,
            body: config.body,
            timeout: 6000
        };
        this.showToast(toast);
    }

    public showToastByType(type: ToastMessageType, config: ToastConfig) {
        const toast: Toast = {
            type,
            title: config.title,
            body: config.body,
            timeout: 8000
        };
        this.showToast(toast);
    }

    private showToast(toast: Toast) {
        toast = { ...toast, showCloseButton: true };
        this.toasterService.pop(toast);
    }
}
