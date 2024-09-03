import { useMemo, useState } from "react";

import { Contact } from "types/contact";
import { CONTACTS_STORAGE_KEY } from "constants/constantsValue";
import useStorageItems from "hooks/useStorageItem";
import { useDebounce } from "hooks/useDebounce";
import { StorageTypeValues } from "utils/storage";

// Components
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";

const ContactContainer = () => {
  const {
    items: contacts,
    addItem,
    deleteItem,
  } = useStorageItems<Contact>(CONTACTS_STORAGE_KEY, StorageTypeValues.LOCAL);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const searchRegex = new RegExp(debouncedSearchTerm, "i");
      return (
        searchRegex.test(contact.name) ||
        searchRegex.test(contact.phone) ||
        searchRegex.test(contact.group)
      );
    });
  }, [contacts, debouncedSearchTerm]);

  // Search input handler
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Reset search keyword
  const handleResetSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <ContactForm addContact={addItem} />
      <div>
        <div className="flex items-center mb-4 gap-2">
          <input
            type="text"
            placeholder="이름, 전화번호, 그룹으로 검색"
            value={searchTerm}
            onChange={handleSearch}
            className="flex-grow p-2 border rounded"
          />
          <button
            onClick={handleResetSearch}
            className="bg-blue-500 text-white rounded hover:bg-blue-600 px-4 py-2 whitespace-nowrap flex-shrink-0"
          >
            전체리스트 보기
          </button>
        </div>
        <ContactList contacts={filteredContacts} deleteContact={deleteItem} />
      </div>
    </div>
  );
};

export default ContactContainer;
