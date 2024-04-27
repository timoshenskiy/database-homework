import styled, { css } from "styled-components";

const Container = styled.div`
  margin: 32px auto;
  padding: 32px;
  width: 100%;
  display: grid;

  @media only screen and (max-width: 1024px) {
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const TableList = styled.div`
  display: grid;
  gap: 48px;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content min-content;
  column-gap: 24px;
  width: 100%;
`;

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`;

const Row = styled.div<{ cellsCount: number }>(
  ({ cellsCount }) => css`
    grid-column-start: 1;
    grid-column-end: 2;
    display: grid;
    grid-template-columns: repeat(${cellsCount}, 1fr);
    width: 100%;
  `
);

const ConditionButtonWrapper = styled.div<{ cellsCount: number }>(
  ({ cellsCount }) => css`
    margin: 24px 0 24px auto;
    grid-column-start: ${cellsCount};
  `
);

const Group = styled.div<{
  rowStartIndex: number;
  rowEndIndex: number;
  columnStartIndex: number;
}>(
  ({ rowStartIndex, rowEndIndex, columnStartIndex }) => css`
    grid-row-start: ${rowStartIndex};
    grid-row-end: ${rowEndIndex};
    grid-column-start: ${columnStartIndex};
    background: var(--light-gray-color);
    border-left: 2px solid var(--dark-gray-color);
    display: flex;
    align-items: center;
    padding: 12px 24px;
  `
);

const GroupButtonWrapper = styled.div<{ rowStartIndex: number }>(
  ({ rowStartIndex }) => css`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: ${rowStartIndex};
    padding-top: 24px;
  `
);

const Cell = styled.div<{ showLabel: boolean }>(
  ({ showLabel }) => css`
    display: grid;
    grid-template-columns: ${showLabel ? "min-content 1fr" : "1fr"};
    width: 100%;
    height: min-content;
    border: 1px solid var(--dark-gray-color);
  `
);

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 16px;
  border-right: 1px solid var(--dark-gray-color);
  background: var(--light-gray-color);
`;

const InputWrapper = styled.div`
  padding: 16px;
`;

const Button = styled.button`
  white-space: nowrap;
  width: min-content;
  min-width: 60px;
  padding: 4px 8px;
  cursor: pointer;
  height: min-content;
`;

const MainControls = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 8px;
  margin-top: 24px;
`;

const SentData = styled.div`
  width: 100%;
  margin-top: 24px;
  padding: 24px;
  background: var(--dark-gray-color);
  border-radius: 4px;
`;

export default {
  Container,
  Wrapper,
  TableList,
  Table,
  RowWrapper,
  Row,
  ConditionButtonWrapper,
  Group,
  GroupButtonWrapper,
  Cell,
  Label,
  InputWrapper,
  Button,
  MainControls,
  SentData,
};
