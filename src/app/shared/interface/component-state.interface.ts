export interface ComponentState {
    isLoading: boolean;
    error: string;
    success?: boolean;
}

export const initialComponentState = {
    error: null,
    isLoading: false,
    success: false
};