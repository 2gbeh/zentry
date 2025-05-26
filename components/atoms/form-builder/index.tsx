import { PropsWithChildren } from "react";
import {
  Path,
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
// SHARED IMPORTS
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { cn } from "@/components/shadcn/utils";

type PropsType = PropsWithChildren<{
  onSubmit?: VoidFunction;
  disabled?: boolean;
}>;

const Root: React.FC<PropsType> = ({ children, onSubmit, disabled }) => {
  return (
    <form onSubmit={onSubmit} className="w-full px-2 sm:w-sm sm:px-0">
      <fieldset disabled={disabled} className="flex flex-col gap-4">
        {children}
      </fieldset>
    </form>
  );
};

interface InputPropsType<T extends FieldValues> {
  field: Path<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  //
  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  info?: string;
}

function Input_<T extends FieldValues>({
  field,
  label,
  type = "text",
  placeholder,
  //
  register,
  errors,
  info,
}: InputPropsType<T>) {
  return (
    <div className="flex flex-col">
      {/* LABEL */}
      {label ? (
        <Label htmlFor={field as string} className="mb-2">
          {label}
        </Label>
      ) : null}
      {/* INPUT */}
      <Input
        {...register?.(field)}
        type={type}
        id={field as string}
        placeholder={placeholder}
      />
      {/* ERROR */}
      {errors?.[field] ? (
        <p className="text-destructive mt-1 px-1 text-sm">
          {errors[field]?.message?.toString()}
        </p>
      ) : info ? (
        <p className="text-muted-foreground mt-1 px-1 text-sm">{info}</p>
      ) : null}
    </div>
  );
}

export const FormBuilder = {
  Root,
  Input: Input_,
};
