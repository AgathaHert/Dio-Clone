import type { Control, FieldValues } from "react-hook-form";

export interface IInput<T extends FieldValues = FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<T>;
  leftIcon?: React.ReactNode;
  errorMessage?: string;
}
