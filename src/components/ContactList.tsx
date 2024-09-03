import { Contact } from "types/contact";
import { useModal } from "hooks/useModal";

import ContactDetailModal from "./modal/ContactDetailModal";

interface ContactListProps {
  contacts: Contact[];
  deleteContact: (id: string) => void;
}

const ContactList = ({ contacts, deleteContact }: ContactListProps) => {
  const { openModal } = useModal();
  const handleDelete = (id: string) => {
    deleteContact(id);
  };

  // Open modal handler
  const handleOpenModal = (contact: Contact) => {
    openModal({
      type: "VIEW_DETAIL",
      component: <ContactDetailModal info={contact} />,
    });
  };

  return (
    <div className="mt-6">
      {contacts.length === 0 ? (
        <p>저장된 연락처가 없습니다.</p>
      ) : (
        contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-2"
          >
            <div>
              <span className="font-semibold">{contact.name}</span>
              <span className="ml-2 text-gray-600">{contact.phone}</span>
              <span className="ml-2 text-gray-600">{contact.group}</span>
            </div>
            <div>
              <button
                onClick={() => handleOpenModal(contact)}
                className="mr-2 px-3 py-1 bg-slate-100 rounded hover:bg-slate-200"
              >
                세부사항
              </button>
              <button
                onClick={() => handleDelete(contact.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 "
              >
                삭제
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList;
