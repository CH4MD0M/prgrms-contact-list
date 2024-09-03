import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, ContactSchemaType } from "schema/contactSchema";

// Components
import Input from "components/atoms/Input";
import SelectionBox from "components/atoms/Selection";

interface ContactFormProps {
  addContact: (data: ContactSchemaType) => void;
}

const ContactForm = ({ addContact }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    mode: "all",
  });

  // Submit contact data
  const onSubmit = (data: ContactSchemaType) => {
    addContact(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl border"
    >
      <Input<ContactSchemaType>
        name="name"
        label="이름"
        register={register}
        errors={errors}
        placeholder="이름을 입력하세요"
        type="text"
      />
      <Input<ContactSchemaType>
        name="phone"
        label="전화번호"
        register={register}
        errors={errors}
        placeholder="전화번호를 입력하세요"
        type="tel"
      />
      <div>
        <SelectionBox register={register} errors={errors} />
      </div>
      <Input<ContactSchemaType>
        name="memo"
        label="간단메모"
        register={register}
        errors={errors}
        placeholder="메모를 입력하세요"
        type="text"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        저장
      </button>
    </form>
  );
};

export default ContactForm;
