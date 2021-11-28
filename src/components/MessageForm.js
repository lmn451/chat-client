import React, { useRef } from "react";

const MessageForm = () => {
  const inputRef = useRef("");
  const onClickHandler = () => {};
  return (
    <>
      <input ref={inputRef} />
      <button onClick={onClickHandler}>Submit</button>
    </>
  );
};

export default MessageForm;
