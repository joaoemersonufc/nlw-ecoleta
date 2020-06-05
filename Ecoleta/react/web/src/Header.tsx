import React from "react";

//transformar função em constante para informar
//as propriedades que ele pode receber em outros componentes

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
