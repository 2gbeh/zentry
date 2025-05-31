import { PropsWithChildren } from "react";
import {
  Path,
  UseFormRegister,
  FieldValues,
  FieldErrors,
  UseFormReturn,
  Control,
} from "react-hook-form";
// SHARED IMPORTS
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { cn } from "@/components/shadcn/utils";

interface RootProps<T extends FieldValues> extends PropsWithChildren {
  form?: UseFormReturn<T>;
  onSubmit?: (values: T) => void | Promise<void>;
}

function Root<T extends FieldValues>({
  children,
  form,
  onSubmit = () => undefined,
}: RootProps<T>) {
  return form ? (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 px-2 sm:w-sm sm:px-0"
      >
        {children}
      </form>
    </Form>
  ) : (
    <form className="w-full space-y-4 px-2 sm:w-sm sm:px-0">{children}</form>
  );
}

interface FieldInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  type?: string;
  label?: string;
  placeholder?: string;
  info?: string;
}

function FieldInput<T extends FieldValues>({
  control,
  name,
  type = "text",
  label,
  placeholder,
  info,
}: FieldInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { invalid } }) => (
        <FormItem>
          {/* LABEL */}
          {label ? <FormLabel className="mb-0.5">{label}</FormLabel> : null}
          {/* INPUT */}
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {/* SUBTEXT */}
          <div className="px-1">
            {invalid ? (
              <FormMessage />
            ) : info ? (
              <FormDescription>{info}</FormDescription>
            ) : null}
          </div>
        </FormItem>
      )}
    />
  );
}

export const FormBuilder = {
  Root,
  FieldInput,
};
