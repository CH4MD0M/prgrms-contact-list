import { UseFormRegister, FieldErrors } from "react-hook-form";

import { GROUPS_STORAGE_KEY } from "constants/constantsValue";
import { ContactSchemaType } from "schema/contactSchema";
import useStorageItems from "hooks/useStorageItem";
import { useModal } from "hooks/useModal";
import { StorageTypeValues } from "utils/storage";

// Components
import GroupModal from "components/modal/GroupModal";

interface Group {
  id: string;
  name: string;
}

interface SelectionBoxProps {
  register: UseFormRegister<ContactSchemaType>;
  errors: Pick<FieldErrors<ContactSchemaType>, "group">;
}

const SelectionBox = ({ register, errors }: SelectionBoxProps) => {
  const { openModal } = useModal();
  const { items: groups, addItem: addGroup } = useStorageItems<Group>(
    GROUPS_STORAGE_KEY,
    StorageTypeValues.LOCAL
  );

  // Add Group Handler
  const handleAddGroup = (newGroup: string) => {
    addGroup({ name: newGroup });
  };

  // Open Modal Handler
  const handleOpenModal = () => {
    openModal({
      type: "ADD_GROUP",
      component: <GroupModal onSelectGroup={handleAddGroup} />,
    });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        그룹
      </label>
      <div className="flex items-center space-x-2">
        <select {...register("group")} className="flex-grow p-2 border rounded">
          <option value="">그룹 선택</option>
          {groups.map((group) => (
            <option key={group.id} value={group.name}>
              {group.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleOpenModal}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          그룹 추가
        </button>
      </div>
      {errors.group && (
        <p className="text-red-500 text-sm">{errors.group.message}</p>
      )}
    </div>
  );
};

export default SelectionBox;
