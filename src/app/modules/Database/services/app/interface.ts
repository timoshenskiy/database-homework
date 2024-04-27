export interface DataSourceInterface {
  table_name: string;
  datasource_title: string;
  report_type_title: string;
  table_description: string | null;
}

export interface ColumnInterface {
  column_name: string;
  type: string;
}

export interface ConditionItemInterface {
  column: string;
  condition: string;
  value: string;
}

export interface ConditionListInterface {
  or_?: ConditionItemInterface[] | ConditionListInterface;
  and_?: ConditionItemInterface[] | ConditionListInterface;
}

export interface MappingItemInterface {
  original_title?: string;
  new_title?: string;
  conditions: {
    condition?: {
      or_?: ConditionListInterface;
      and_?: ConditionListInterface;
    };
  } | null;
}

export interface SendDataInterface {
  data: {
    table_name: string;
    mapping?: MappingItemInterface[];
  }[];
}
