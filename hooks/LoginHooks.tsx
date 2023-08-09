"use client"

import { useState, ChangeEvent, FormEvent, SetStateAction } from "react";

interface Inputs {
  [key: string]: string;
}

interface UseLoginFormProps {
  handleSubmit: (event: FormEvent) => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputs: Inputs;
  isSubmitting: boolean;
}

const useLoginForm = (callback: () => void): UseLoginFormProps => {
  const [inputs, setInputs] = useState<Inputs>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    if (event) {
      event.preventDefault();
    }
    setIsSubmitting(true);
    callback();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputs((prevInputs) => ({
      ...prevInputs,
      [event.target.id]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    isSubmitting,
  };
};

export default useLoginForm;
