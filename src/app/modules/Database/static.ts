export enum TypeName {
  from = "from",
  setAs = "setAs",
  when = "when",
}

export enum Suggestion {
  dataSources = "dataSources",
  columns = "columns",
  whenOptions = "whenOptions",
  whenValues = "whenValues",
}

export enum ConditionType {
  and = "and",
  or = "or",
}

export const ROW_TYPES = {
  [TypeName.from]: {
    cells: [
      {
        type: Suggestion.dataSources,
        label: "FROM",
        placeholder: "Select data table",
        value: null,
        onlySuggestionValue: true,
      },
    ],
    type: TypeName.from,
    dependentRow: TypeName.setAs,
    showConditionButton: false,
  },
  [TypeName.setAs]: {
    cells: [
      {
        type: Suggestion.columns,
        label: "SET",
        placeholder: "Enter column",
        value: null,
        onlySuggestionValue: true,
      },
      {
        type: Suggestion.columns,
        label: "AS",
        placeholder: "Set value or formula",
        value: null,
        onlySuggestionValue: false,
      },
    ],
    type: TypeName.setAs,
    showConditionButton: true,
  },
  [TypeName.when]: {
    cells: [
      {
        type: Suggestion.columns,
        label: "WHEN",
        placeholder: "Select column",
        value: null,
        onlySuggestionValue: true,
      },
      {
        type: Suggestion.whenOptions,
        placeholder: "Select expression",
        value: null,
        onlySuggestionValue: true,
      },
      {
        type: Suggestion.whenValues,
        placeholder: "exp. condition value",
        value: null,
        onlySuggestionValue: true,
      },
    ],
    type: TypeName.when,
    dependentRow: "",
    showConditionButton: true,
  },
};

export const BUTTON_TEXTS = {
  addCondition: "+ Condition",
  addGroup: "+ Group",
  addTable: "+ Table",
  resetForm: "Cancel",
  submitForm: "Submit",
  andToggle: "ADD",
  orToggle: "OR",
};
