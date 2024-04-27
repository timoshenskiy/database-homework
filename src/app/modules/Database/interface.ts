import { ConditionType, Suggestion, TypeName } from "./static";

export interface SuggestionsInterface {
  dataSources: string[];
  columns: string[];
  whenOptions: string[];
  whenValues: string[];
}

export interface InnerGroupInterface {
  startIndex: number;
  endIndex: number;
}
export interface GroupAndInterface {
  [ConditionType.and]?: (InnerGroupInterface | TypeGroup)[];
}

export interface GroupOrInterface {
  [ConditionType.or]: (InnerGroupInterface | TypeGroup)[];
}

export type TypeGroup =
  | GroupAndInterface
  | GroupOrInterface
  | InnerGroupInterface;
export interface DatabaseMapItemInterface {
  rows: {
    cells: {
      type: Suggestion;
      label: string;
      placeholder: string;
      value?: string | null;
      onlySuggestionValue?: boolean;
    }[];
    type: TypeName;
    dependentRow?: TypeName;
    showConditionButton?: boolean;
    group?: TypeGroup;
  }[];
}

export interface TablePropsInterface {
  suggestions: SuggestionsInterface;
  databaseMap: DatabaseMapItemInterface[];
  setDatabaseMap: (value: DatabaseMapItemInterface[] | any) => void;
  tableIndex: number;
}

export interface RowPropsInterface extends TablePropsInterface {
  rowIndex: number;
}

export interface CellPropsInterface extends RowPropsInterface {
  cellIndex: number;
}

export interface GroupPropsInterface {
  databaseMap: DatabaseMapItemInterface[];
  setDatabaseMap: (value: DatabaseMapItemInterface[] | any) => void;
  tableIndex: number;
  columnIndex: number;
  route: (string | number)[];
  group?: TypeGroup;
}
