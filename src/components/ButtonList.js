import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [];
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Song" />
      <Button name="Gaming" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Soccer" />
      <Button name="Cooking" />
      <Button name="Concert" />
      <Button name="Hockey" />
      <Button name="Soccer" />
      <Button name="Cooking" />
      <Button name="Concert" />
      <Button name="Hockey" />
    </div>
  );
};

export default ButtonList;
