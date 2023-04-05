import styled from "@emotion/styled";

export const Root = styled.div`
 padding: 5px 10px;
  cursor: ${(p) => (p.disabled ? "initial" : "pointer")};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  background-color: ${(p) => (p.active ? "#ccc" : "transparent")}`