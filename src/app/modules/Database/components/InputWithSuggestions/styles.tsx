import styled, { css } from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid var(--dark-gray-color);
  border-radius: 4px;
  min-height: 36px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 4px 8px;
  font-size: 16px;
  line-height: 18px;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 100%;
`;

const TagWrapper = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
`;

const Tag = styled.span`
  font-size: 16px;
  line-height: 18px;
  background-color: var(--blue-color);
  color: var(--white-color);
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
`;

const TagCloseButton = styled.button`
  background-color: transparent;
  color: var(--white-color);
  border: none;
  cursor: pointer;
  margin-left: 4px;
`;

const SuggestionsList = styled.ul<{ show: boolean }>(
  ({ show }) => css`
    position: absolute;
    z-index: 2;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: ${show ? "block" : "none"};
    max-height: 300px;
    overflow-y: scroll;
  `
);

const SuggestionItem = styled.li`
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--dark-gray-color);
  }
`;

export default {
  InputWrapper,
  Input,
  TagWrapper,
  Tag,
  TagCloseButton,
  SuggestionsList,
  SuggestionItem,
};
