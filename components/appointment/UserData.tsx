import React from "react";
import Input from "../Input";
import Button from "../Button";
import { User } from "@/types";

interface UserDataProps {
  next: () => void;
  setUser: (user: User) => void;
  user: User;
}
export default function UserData({ next, user, setUser }: UserDataProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };
  const isValid = user.name && user.rut && user.phone;

  return (
    <form>
      <Input
        onChange={handleChange}
        value={user.name}
        label={"Tu nombre"}
        name={"name"}
        placeholder={"Juan Perez"}
        required
      />
      <Input
        onChange={handleChange}
        value={user.rut}
        label={"Tu rut"}
        name={"rut"}
        placeholder={"Rut"}
        required
      />
      <Input
        onChange={handleChange}
        value={user.phone}
        label={"Tu teléfono"}
        name={"phone"}
        placeholder={"+569 ..."}
        required
      />
      <Input
        onChange={handleChange}
        value={user.email}
        label={"Tu email"}
        name={"email"}
        placeholder={"ejemplo@gmail.com"}
      />
      <Button isDisabled={!isValid} label={"Siguiente"} action={next} />
    </form>
  );
}
