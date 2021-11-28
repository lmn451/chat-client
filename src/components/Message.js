import React, { memo } from "react";
import styled from "styled-components";

const Container = styled.li``;

const Message = memo(({ message }) => {
  return <Container>{message.text}</Container>;
});

export default Message;
