import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .regex(/^[가-힣]{1,50}$/, "이름은 한글로 1~50자 이내여야 합니다.")
    .min(1, "이름은 필수입니다.")
    .max(50, "이름은 50자를 초과할 수 없습니다."),
  phone: z
    .string()
    .regex(/^01[0-1, 7][0-9]{7,8}$/, "올바른 전화번호 형식이 아닙니다."),
  group: z
    .string()
    .min(1, "그룹은 필수입니다.")
    .max(30, "그룹 이름은 30자를 초과할 수 없습니다."),
  memo: z.string().max(200, "메모는 200자를 초과할 수 없습니다.").optional(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
