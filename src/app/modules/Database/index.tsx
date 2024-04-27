"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { databaseAppSelector } from "./services/app";
import {
  getColumns,
  getDataSources,
  getWhenOptions,
  getWhenValues,
  sendData,
} from "./services/app/actions";

import S from "./styles";
import InputWithSuggestions from "./components/InputWithSuggestions";
import { BUTTON_TEXTS, ConditionType, ROW_TYPES, TypeName } from "./static";
import {
  CellPropsInterface,
  DatabaseMapItemInterface,
  TypeGroup,
  GroupPropsInterface,
  RowPropsInterface,
  SuggestionsInterface,
  TablePropsInterface,
} from "./interface";
import { getSendDataFromDatabaseMap, getValueByKeys } from "./utils";

const renderCell = (cellProps: CellPropsInterface) => {
  const {
    databaseMap,
    setDatabaseMap,
    tableIndex,
    rowIndex,
    cellIndex,
    suggestions,
  } = cellProps;

  const cellMap = databaseMap[tableIndex].rows[rowIndex].cells[cellIndex];
  const { type, label, placeholder, value } = cellMap;

  const currentSuggestions = suggestions[type];
  const showLabel = !!label;

  const onSuggestionClick = (newValue?: string | null) => {
    const updatedDatabaseMap = JSON.parse(JSON.stringify(databaseMap));
    updatedDatabaseMap[tableIndex].rows[rowIndex].cells[cellIndex].value =
      newValue;

    updatedDatabaseMap.some(
      (table: DatabaseMapItemInterface, currentTableIndex: number) => {
        const { rows } = table;

        return rows.some((row, currentRowIndex: number) => {
          const { dependentRow, cells } = row;

          const fullFilledRow = cells.every((cell) => !!cell.value);
          const isLast = rows.length - 1 === currentRowIndex;

          const updatedRows = updatedDatabaseMap[currentTableIndex].rows;

          if (dependentRow && isLast && fullFilledRow) {
            updatedRows.push({
              ...ROW_TYPES[dependentRow],
            });

            return true;
          }

          if (!isLast && !fullFilledRow && dependentRow) {
            updatedRows.splice(currentRowIndex + 1);

            return true;
          }

          return false;
        });
      }
    );

    setDatabaseMap(updatedDatabaseMap);
  };

  return (
    <S.Cell showLabel={showLabel}>
      {showLabel && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <InputWithSuggestions
          suggestions={currentSuggestions}
          placeholder={placeholder}
          selectedSuggestion={value}
          setValue={onSuggestionClick}
        />
      </S.InputWrapper>
    </S.Cell>
  );
};

const renderGroup = ({
  group,
  tableIndex,
  databaseMap,
  setDatabaseMap,
  columnIndex,
  route,
}: GroupPropsInterface): any => {
  if (group) {
    const currentConditionType = Object.keys(group)[0];
    const currentGroups: any[] =
      group[currentConditionType as keyof typeof group];

    return currentGroups.map((currentGroup, currentIndex) => {
      const { startIndex, endIndex } = currentGroup;

      if (startIndex && endIndex) {
        const buttonText =
          currentConditionType === ConditionType.and
            ? BUTTON_TEXTS.andToggle
            : BUTTON_TEXTS.orToggle;

        const onConditionTypeButtonClick = () => {
          const updatedDatabaseMap = JSON.parse(JSON.stringify(databaseMap));

          const updatedGroup = getValueByKeys(
            updatedDatabaseMap[tableIndex].rows[2].group,
            route
          );

          const newConditionType: ConditionType =
            currentConditionType === ConditionType.and
              ? ConditionType.or
              : ConditionType.and;
          delete updatedGroup[
            currentConditionType as keyof typeof updatedGroup
          ];
          updatedGroup[newConditionType] = currentGroups;
          setDatabaseMap(updatedDatabaseMap);
        };

        return (
          <S.Group
            rowStartIndex={startIndex}
            rowEndIndex={endIndex}
            columnStartIndex={columnIndex}
          >
            <S.Button onClick={onConditionTypeButtonClick}>
              {buttonText}
            </S.Button>
          </S.Group>
        );
      }

      return renderGroup({
        tableIndex,
        databaseMap,
        setDatabaseMap,
        columnIndex: columnIndex + 1,
        group: currentGroup,
        route: [...route, currentConditionType, currentIndex],
      });
    });
  }

  return null;
};

const renderRow = ({
  suggestions,
  databaseMap,
  setDatabaseMap,
  tableIndex,
  rowIndex,
}: RowPropsInterface) => {
  const rowMap = databaseMap[tableIndex].rows[rowIndex];
  const { cells, showConditionButton, type } = rowMap;

  const onConditionButtonClick = () => {
    const updatedDatabaseMap = JSON.parse(JSON.stringify(databaseMap));
    const updatedRows = updatedDatabaseMap[tableIndex].rows;
    const updatedRow = updatedRows[rowIndex];

    updatedRow.showConditionButton = false;
    updatedRows.splice(rowIndex + 1, 0, {
      ...ROW_TYPES.when,
    });

    if (type === TypeName.when) {
      const groupIndex = 2;

      if (rowIndex === groupIndex) {
        updatedRow.group = {
          [ConditionType.and]: [
            {
              startIndex: groupIndex + 1,
              endIndex: groupIndex + 3,
            },
          ],
        };
      }
    }

    setDatabaseMap(updatedDatabaseMap);
  };

  const cellsCount = cells.length;

  return (
    <S.Row cellsCount={cellsCount}>
      {cells.map((cellMap, cellIndex) =>
        renderCell({
          suggestions,
          databaseMap,
          setDatabaseMap,
          tableIndex,
          rowIndex,
          cellIndex,
        })
      )}
      {showConditionButton && (
        <S.ConditionButtonWrapper cellsCount={cellsCount}>
          <S.Button onClick={onConditionButtonClick}>
            {BUTTON_TEXTS.addCondition}
          </S.Button>
        </S.ConditionButtonWrapper>
      )}
    </S.Row>
  );
};

const renderTable = ({
  suggestions,
  databaseMap,
  setDatabaseMap,
  tableIndex,
}: TablePropsInterface) => {
  const { rows } = databaseMap[tableIndex];
  const groupButtonStartIndex = rows.length + 1;
  const initialColumnIndex = 2;
  const groupIndex = 2;
  const showGroupButton = rows.length > 2;
  const group = rows[groupIndex]?.group;

  const updateMostDeepGroup = (
    currentGroup: TypeGroup,
    newGroup: TypeGroup
  ) => {
    const currentGroupType = Object.keys(currentGroup)[0];

    let innerGroup = null;

    const currentGroupContent: any =
      currentGroup[currentGroupType as keyof typeof currentGroup];

    if (currentGroupContent && Array.isArray(currentGroupContent)) {
      innerGroup = currentGroupContent.find((g: any) => !g.startIndex);
    }

    if (innerGroup) {
      updateMostDeepGroup(innerGroup, newGroup);
    } else if (currentGroupContent && Array.isArray(currentGroupContent)) {
      currentGroupContent.push(newGroup);
    }
  };

  const onGroupButtonClick = () => {
    const updatedDatabaseMap = JSON.parse(JSON.stringify(databaseMap));

    const updatedRows = updatedDatabaseMap[tableIndex].rows;
    const updatedGroup = updatedRows[groupIndex].group;

    updatedRows.push({
      ...ROW_TYPES.when,
    });

    const newGroup = {
      and: [
        {
          startIndex: groupIndex + 1,
          endIndex: updatedRows.length + 1,
        },
      ],
    };

    if (group) {
      updateMostDeepGroup(updatedGroup, newGroup);
    } else {
      updatedRows[groupIndex].group = newGroup;
    }

    setDatabaseMap(updatedDatabaseMap);
  };

  return (
    <S.Table>
      {rows.map((rowMap, rowIndex) =>
        renderRow({
          suggestions,
          databaseMap,
          setDatabaseMap,
          tableIndex,
          rowIndex,
        })
      )}
      {renderGroup({
        group,
        tableIndex,
        databaseMap,
        setDatabaseMap,
        columnIndex: initialColumnIndex,
        route: [],
      })}
      {showGroupButton && (
        <S.GroupButtonWrapper
          rowStartIndex={groupButtonStartIndex}
          onClick={onGroupButtonClick}
        >
          <S.Button>{BUTTON_TEXTS.addGroup}</S.Button>
        </S.GroupButtonWrapper>
      )}
    </S.Table>
  );
};

const INITIAL_STATE = [
  {
    rows: [{ ...ROW_TYPES[TypeName.from] }],
  },
];
const DataBase = () => {
  const {
    dataSources: { data: dataSources },
    columns: { data: columns },
    whenOptions: { data: whenOptions },
    whenValues: { data: whenValues },
    sendData: { data: sentData },
  } = useAppSelector(databaseAppSelector);

  const [databaseMap, setDatabaseMap] = useState(INITIAL_STATE);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataSources());
    dispatch(getColumns());
    dispatch(getWhenOptions());
    dispatch(getWhenValues());
  }, [dispatch]);

  const onAddTableButtonClick = () => {
    const updatedDatabaseMap = JSON.parse(JSON.stringify(databaseMap));
    updatedDatabaseMap.push({
      rows: [{ ...ROW_TYPES.from }],
    });
    setDatabaseMap(updatedDatabaseMap);
  };

  const onResetButtonClick = () => {
    setDatabaseMap(INITIAL_STATE);
  };

  const onSubmitButtonClick = () => {
    const data = getSendDataFromDatabaseMap(databaseMap);
    dispatch(sendData(data));
  };

  const suggestions: SuggestionsInterface = {
    dataSources,
    columns,
    whenOptions,
    whenValues,
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.TableList>
          {databaseMap.map((tableMap, tableIndex) =>
            renderTable({
              suggestions,
              databaseMap,
              setDatabaseMap,
              tableIndex,
            })
          )}
          <S.Button onClick={onAddTableButtonClick}>
            {BUTTON_TEXTS.addTable}
          </S.Button>
        </S.TableList>
        <S.MainControls>
          <S.Button onClick={onSubmitButtonClick} key="submitButton">
            {BUTTON_TEXTS.submitForm}
          </S.Button>
          <S.Button onClick={onResetButtonClick} key="resetFrom">
            {BUTTON_TEXTS.resetForm}
          </S.Button>
        </S.MainControls>
        <S.SentData>
          <pre>
            <code>{JSON.stringify(sentData, null, 2)}</code>
          </pre>
        </S.SentData>
      </S.Wrapper>
    </S.Container>
  );
};

export default DataBase;
