import React from "react";
import styled from "styled-components";

const Check = styled.div`
  width: 28px;
  height: 28px;
  position: relative;
  margin: 0px auto;
  background: #fcfff4;
  background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
  .example {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    left: 4px;
    top: 4px;
    background: linear-gradient(top, #222 0%, #45484d 100%);
    border-radius: 50px;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
      0px 1px 0px rgba(255, 255, 255, 1);
    &::after {
      content: "";
      width: 16px;
      height: 16px;
      position: absolute;
      top: 2px;
      left: 2px;
      background: #27ae60;
      background: linear-gradient(top, #27ae60 0%, #145b32 100%);
      opacity: 0;
      border-radius: 50px;
      box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
    }
    &:hover::after {
      opacity: 0.3;
    }
  }
  input {
    visibility: hidden;
    &:checked + label::after {
      opacity: 1;
    }
  }
`;
const Checkbox = ({ check, setCheck, props }) => {
  return (
    <div className="flex justify-center items-center gap-4 ml-3 p-0">
      <Check>
        <input
          type="checkbox"
          value="None"
          id="example"
          name="check"
          checked={check}
          onClick={() => setCheck(!check)}
        />
        <label for="example" className="example"></label>
      </Check>
      <label
        htmlFor="remember"
        className="cursor-pointer select-none"
        onClick={() => setCheck(!check)}
      >
        <small className="tracking-[2px]">Remember me!</small>
      </label>
    </div>
  );
};

export default Checkbox;
