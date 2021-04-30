import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  member: Props["member"];
  setMember: React.Dispatch<React.SetStateAction<Props["member"]>>;
}

const RegisterForm: React.FC<IProps> = ({ member, setMember }) => {
  const [field, setField] = useState({
    name: "",
    age: "",
    avatar: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setField({
      ...field,
      [e.target.name]: [e.target.value],
    });
  };

  const handleClick = (): void => {
    if (!field.name || !field.avatar || !field.age) {
      return;
    }

    setMember([
      {
        name: field.name,
        age: parseInt(field.age),
        avatar: field.avatar,
        message: field.message,
      },
      ...member,
    ]);

    setField({
      name: "",
      age: "",
      avatar: "",
      message: "",
    });
  };
  // const handleClick = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ): void => {};

  return (
    <div className="register-wrap">
      <input
        type="text"
        className=""
        placeholder="Name"
        name="name"
        value={field.name}
        onChange={handleChange}
      />
      <input
        type="number"
        className=""
        placeholder="Age"
        name="age"
        value={field.age}
        onChange={handleChange}
      />
      <input
        type="text"
        className=""
        placeholder="Avatar Url"
        name="avatar"
        value={field.avatar}
        onChange={handleChange}
      />
      <textarea
        className=""
        placeholder="Message (Optional)"
        name="message"
        value={field.message}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Register</button>
    </div>
  );
};

export default RegisterForm;
