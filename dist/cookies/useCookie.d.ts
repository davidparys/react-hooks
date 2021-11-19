export declare const setCookie: (name: string, value: string, options?: {}) => void;
export declare const getCookie: (name: string, initialValue: string) => string;
export default function (key: string, initialValue: string): (string | ((value: any, options: any) => void))[];
