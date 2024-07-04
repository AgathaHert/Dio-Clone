/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import type React from "react";
import {
  Control,
  Controller,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";
import type { IInput } from "./types";

const Input = <T extends FieldValues>({
  leftIcon,
  name,
  control,
  errorMessage,
  ...rest
}: IInput<T>) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name as Path<T>}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export default Input;
