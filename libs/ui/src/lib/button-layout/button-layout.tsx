import React from 'react';

export interface ButtonLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function ButtonLayout(props: ButtonLayoutProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <h1 className="font-ubuntu-mono text-xs">{props.title}</h1>
      {props.children}
    </div>
  );
}

export default ButtonLayout;
