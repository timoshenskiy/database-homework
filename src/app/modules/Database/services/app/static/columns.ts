export default [
  {
    column_name: "event_date_day_before",
    type: "Date",
  },
  {
    column_name: "report_type",
    type: "LowCardinality(String)",
  },
  {
    column_name: "data_value_date_from",
    type: "Date",
  },
  {
    column_name: "run_id",
    type: "String",
  },
  {
    column_name: "event_type",
    type: "LowCardinality(String)",
  },
  {
    column_name: "external_account_id",
    type: "LowCardinality(String)",
  },
  {
    column_name: "agency_id",
    type: "UInt64",
  },
  {
    column_name: "datasource_account_id",
    type: "String",
  },
  {
    column_name: "data_value_date_to",
    type: "Date",
  },
  {
    column_name: "order_id",
    type: "UInt32",
  },
  {
    column_name: "datasource_dsas_name",
    type: "LowCardinality(String)",
  },
  {
    column_name: "extract_template_title",
    type: "LowCardinality(String)",
  },
  {
    column_name: "error_message",
    type: "String",
  },
  {
    column_name: "primary_key",
    type: "UInt64",
  },
  {
    column_name: "event_status",
    type: "LowCardinality(String)",
  },
  {
    column_name: "event_time",
    type: "DateTime64(3)",
  },
];
