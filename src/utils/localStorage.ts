const setLocalStorage = (key: string, value: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
    }
};

const getLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
};

const removeLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        return localStorage.removeItem(key);
    }
};

export { setLocalStorage, getLocalStorage, removeLocalStorage };
