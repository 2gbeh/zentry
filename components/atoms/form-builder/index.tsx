import { PropsWithChildren } from "react";
// SHARED IMPORTS
import { Label } from "../../shadcn/ui/label";
import { Input } from "../../shadcn/ui/input";

type PropsType = PropsWithChildren<{
  disabled?: boolean;
}>;

const Root: React.FC<PropsType> = ({ children, disabled }) => {
  return (
    <form className="sm:w-sm w-full px-2 sm:px-0">
      <fieldset
        disabled={disabled}
        className="flex flex-col gap-4"
      >
        {children}
      </fieldset>
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
    <div className="grid gap-1">
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
