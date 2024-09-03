import { Contact } from "types/contact";

interface ContactDetailModalProps {
  info: Contact;
}

const ContactDetailModal = ({ info }: ContactDetailModalProps) => {
  return (
    <div className="bg-white p-6 w-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">연락처 상세 정보</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            이름:
          </label>
          <p className="mt-1 text-lg">{info.name}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            전화번호:
          </label>
          <p className="mt-1 text-lg">{info.phone}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            그룹:
          </label>
          <p className="mt-1 text-lg">{info.group}</p>
        </div>
        {info.memo && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              메모:
            </label>
            <p className="mt-1 text-lg">{info.memo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactDetailModal;
