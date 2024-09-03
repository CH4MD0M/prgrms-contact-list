import { z } from "zod";
import { getStorageItem, StorageTypeValues } from "utils/storage";
import { GROUPS_STORAGE_KEY } from "constants/constantsValue";

export const groupSchema = z.object({
  groupName: z
    .string()
    .min(1, "그룹 이름은 필수입니다.")
    .max(30, "그룹 이름은 30자를 초과할 수 없습니다.")
    .refine((value) => {
      const storedGroups =
        getStorageItem<string[]>(StorageTypeValues.LOCAL, GROUPS_STORAGE_KEY) ||
        [];
      return !storedGroups.includes(value);
    }, "이미 존재하는 그룹 이름입니다."),
});

export type GroupSchemaType = z.infer<typeof groupSchema>;
