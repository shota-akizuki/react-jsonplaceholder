import React from "react";

//各propsを分割代入({a,b,c})＝(props) {props.a} {props.b} {props.c}
//{}のなかはJavaScriptの変数名！
//``（バッククオート）を使うと文字列の中に変数名を埋め込めることができる

export const Button = ({ onClick, color, text }) => {
  return (
    <button onClick={onClick} className={`ui ${color} button`}>
      {text}
    </button>
  );
};

export default Button;
