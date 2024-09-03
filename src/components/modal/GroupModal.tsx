import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { groupSchema, GroupSchemaType } from "schema/groupSchema";
import { useModal } from "hooks/useModal";

interface GroupModalProps {
  onSelectGroup: (group: string) => void;
}

const GroupModal = ({ onSelectGroup }: GroupModalProps) => {
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupSchemaType>({
    resolver: zodResolver(groupSchema),
    mode: "onChange",
  });

  const onSubmit = (data: GroupSchemaType) => {
    onSelectGroup(data.groupName);
    closeModal("ADD_GROUP");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold">조직 추가</h2>
      <input
        type="text"
        {...register("groupName")}
        placeholder="새 조직 이름"
        className="w-full p-2 border rounded"
      />
      {errors.groupName && (
        <p className="text-red-500 text-sm mt-1">{errors.groupName.message}</p>
      )}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        추가
      </button>
    </form>
  );
};

export default GroupModal;
