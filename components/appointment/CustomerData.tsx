import { Customer } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import Input from "../Input";

interface customerDataProps {
  setStep: Dispatch<SetStateAction<number>>;
  setcustomer: (customer: Customer) => void;
  customer: Customer;
}
export default function CustomerData({
  setStep,
  customer,
  setcustomer,
}: customerDataProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setcustomer({ ...customer, [e.currentTarget.name]: e.currentTarget.value });
  };
  const isValid = customer.name && customer.rut && customer.phone;
  const next = () => setStep((v) => v + 1);
  const prev = () => setStep((v) => v - 1);

  return (
    <form>
      <Input
        onChange={handleChange}
        value={customer.name}
        label={"Tu nombre"}
        name={"name"}
        placeholder={"Juan Perez"}
        required
      />
      <Input
        onChange={handleChange}
        value={customer.rut}
        label={"Tu rut"}
        name={"rut"}
        placeholder={"Rut"}
        required
      />
      <Input
        onChange={handleChange}
        value={customer.phone}
        label={"Tu teléfono"}
        name={"phone"}
        placeholder={"+569 ..."}
        required
      />
      <Input
        onChange={handleChange}
        value={customer.email}
        label={"Tu email"}
        name={"email"}
        placeholder={"ejemplo@gmail.com"}
      />

      <div className="grid grid-cols-2 gap-2 max-w-md mt-10 ml-auto">
        <Button label={"Atras"} action={prev} />
        <Button isDisabled={!isValid} label={"Siguiente"} action={next} />
      </div>
    </form>
  );
}
