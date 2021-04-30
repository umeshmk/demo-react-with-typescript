import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ member }) => {
  const renderList = (): JSX.Element[] => {
    return member.map((m) => {
      return (
        <div className="list">
          <div>
            <div className="avatar">
              <img src={m.avatar} alt="" />
            </div>
            <div className="name">{m.name}</div>
            <div className="age">Age : {m.age}</div>
          </div>
          <div className="message">
            <q>{m.message}</q>
          </div>
        </div>
      );
    });
  };

  return <div className="list-wrap">{renderList()}</div>;
};

export default List;
