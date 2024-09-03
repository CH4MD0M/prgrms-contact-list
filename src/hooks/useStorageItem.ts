import { useState } from "react";
import { nanoid } from "nanoid";

import {
  StorageTypeValues,
  StorageType,
  setStorageItem,
  getStorageItem,
} from "utils/storage";

interface WithId {
  id: string;
}

const useStorageItems = <T extends WithId>(
  storageKey: string,
  storageType: StorageType = StorageTypeValues.LOCAL
) => {
  const [items, setItems] = useState<T[]>(() => {
    const storedItems = getStorageItem<T[]>(storageType, storageKey);
    return storedItems || [];
  });

  const addItem = (newItem: Omit<T, "id">) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, { ...newItem, id: nanoid(4) } as T];
      setStorageItem(storageType, storageKey, updatedItems);
      return updatedItems;
    });
  };

  const deleteItem = (idToDelete: string) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== idToDelete);
      setStorageItem(storageType, storageKey, updatedItems);
      return updatedItems;
    });
  };

  return {
    items,
    addItem,
    deleteItem,
  };
};

export default useStorageItems;
