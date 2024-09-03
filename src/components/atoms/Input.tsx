import {
  UseFormRegister,
  FieldErrors,
  Path,
  FieldValues,
} from "react-hook-form";

type InputProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  label: string;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;

const Input = <TFieldValues extends FieldValues>({
  name,
  label,
  register,
  errors,
  ...props
}: InputProps<TFieldValues>) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
        {...register(name)}
        {...props}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
