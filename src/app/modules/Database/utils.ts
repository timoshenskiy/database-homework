import { DatabaseMapItemInterface, TypeGroup } from "./interface";
import { SendDataInterface } from "./services/app/interface";

export const getValueByKeys = (
  obj: object,
  keys: (string | number)[]
): GroupInterface => {
  let value: object = obj;

  keys.forEach((key) => {
    value = value[key as keyof typeof value];
  });

  return value;
};

export const getSendDataCondition = (group: TypeGroup) => {
  // toDo reformat conditions
  console.log(group);

  return null;
};

export const getSendDataFromDatabaseMap = (
  databaseMap: DatabaseMapItemInterface[]
): SendDataInterface => {
  const result = databaseMap.map((tableMap: DatabaseMapItemInterface) => {
    const { rows } = tableMap;
    const [datasourceRow, setAsRow, whenRow] = rows;

    const tableName = datasourceRow?.cells[0]?.value;

    const originalTitle = setAsRow?.cells[0]?.value;
    const newTitle = setAsRow?.cells[1]?.value;

    const conditions = whenRow?.group
      ? { condition: getSendDataCondition(whenRow.group) }
      : null;

    const mapping =
      originalTitle && newTitle
        ? {
            original_title: originalTitle,
            new_title: newTitle,
            conditions,
          }
        : null;

    return {
      table_name: tableName,
      mapping,
    };
  });

  // toDO
  return { data: result };
};
