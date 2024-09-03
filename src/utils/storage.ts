export const StorageTypeValues = {
  LOCAL: 'localStorage',
  SESSION: 'sessionStorage',
} as const;

export type StorageType = (typeof StorageTypeValues)[keyof typeof StorageTypeValues];

const getStorageObject = (storageType: StorageType): Storage => {
  switch (storageType) {
    case StorageTypeValues.LOCAL:
      return localStorage;
    case StorageTypeValues.SESSION:
      return sessionStorage;
    default:
      throw new Error(`Invalid storage type: ${storageType}`);
  }
};

export const setStorageItem = <T>(storageType: StorageType, key: string, value: T): void => {
  const storage = getStorageObject(storageType);
  storage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = <T>(storageType: StorageType, key: string): T | null => {
  const storage = getStorageObject(storageType);
  const value = storage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};
