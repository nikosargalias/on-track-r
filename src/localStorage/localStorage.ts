export const loadState = (key: string) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};
