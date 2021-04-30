import { useState } from "react";
import "./App.css";
import List from "./components/List";
import RegisterForm from "./components/RegisterForm";

export interface IState {
  member: {
    name: string;
    age: number;
    avatar: string;
    message?: string;
  }[];
}

function App() {
  const [members, setMembers] = useState<IState["member"]>([
    {
      name: "umesh",
      age: 30,
      avatar: "https://avatars.githubusercontent.com/u/19268386?v=4",
      message: "Ok. I'll be there.",
    },
    {
      name: "Sachin",
      age: 44,
      avatar:
        "https://c.ndtvimg.com/2021-03/u0812bl8_sachin-tendulkar-afp_625x300_27_March_21.jpg?q=60",
      message: "Yeah Definately, I will be coming.",
    },
  ]);

  return (
    <div className="App">
      <h1>Register For Event</h1>

      <RegisterForm member={members} setMember={setMembers} />
      <h1>Members Registered For Event</h1>
      <List member={members} />
    </div>
  );
}

export default App;
