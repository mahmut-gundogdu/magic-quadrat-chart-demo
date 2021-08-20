import { CompanyModel } from "./types/CompanyModel";
const key = 'companies';

export function saveToStorage(data: any) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getCompainesFromStorage(): CompanyModel[] | null {
    const json = localStorage.getItem(key)

    if (!json) {
        return null;
    }

    return JSON.parse(json)
}

