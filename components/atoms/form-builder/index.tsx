import { PropsWithChildren } from "react";
// SHARED IMPORTS
import { Label } from "../../shadcn/ui/label";
import { Input } from "../../shadcn/ui/input";

type PropsType = PropsWithChildren<{
  disabled?: boolean;
}>;

const Root: React.FC<PropsType> = ({ children, disabled }) => {
  return (
    <form className="mt-6 flex max-w-sm flex-col gap-6">
      <fieldset disabled={disabled}>{children}</fieldset>
    </form>
  );
};

type InputPropsType = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const Input_: React.FC<InputPropsType> = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
}) => {
  return (
    <div className="grid gap-2">
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export const FormBuilder = {
  Root,
  Input: Input_,
};
