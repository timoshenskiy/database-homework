export default [
  {
    table_name: "mrt_extract_logs_unfinished",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "mrt_extract_logs_live",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "mrt_extract_logs_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "mrt_dataflow_order_runs_live",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "mrt_dataflow_order_runs_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "mrt_dataflow_order_runs_full_tmp_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_order_runs__historical_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name:
      "int_mixpanel_events__matched_with_traffic_source_info_unfinished",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_mixpanel_events__matched_with_traffic_source_info_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_billing_rows_on_sla_event_log_rebuild_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_billing_rows_on_sla_event_log_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_all_runs_unfinished",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_all_runs_live",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_all_runs_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name:
      "int_activity_events_with_funnel_metrcis_materialized_unfinished",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_activity_events_with_funnel_metrcis_materialized_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_activity_events_materialized_unfinished",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_activity_events_materialized_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_activity_events__from_mixpanel_unfinished",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_activity_events__from_mixpanel_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "experimetn",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "dim_order_run_events_stream_live",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "dim_order_run_events_stream_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "dim_order_run_events_activity_stream_tmp_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "dim_order_run_events_activity_stream_live",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "dim_order_run_events_activity_stream_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "dim_dataflow_logs_unfinished",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "dim_dataflow_logs_live",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "dim_dataflow_logs_history",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "biz_dbt_models_keywords_popularity",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "biz_customers_pipeline_stats",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "ads_performance_ai",
    datasource_title: "",
    report_type_title: "",
    table_description: null,
  },
  {
    table_name: "int_dts_datatables_facets",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "DTS datatables facets dict with datatable_id as key. Used to increase performance on join and stabilize realtime data from DTS postgress",
  },
  {
    table_name: "biz_dataflow_runs_customers",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Preparing data about dataflows for embedded Dataflow Dashboard for customers.",
  },
  {
    table_name: "int_activity_events_from_offline_sources",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Intermediate model for preparation offline activities for the activity stream. Do not use for analytics.",
  },
  {
    table_name: "biz_palantir_production_table_name_keywords_frequency",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Keywords popularity used in DBT project models with queries median to models",
  },
  {
    table_name: "mrt_dataflow_order_runs",
    datasource_title: "",
    report_type_title: "",
    table_description: "Dataflow order run events data mart",
  },
  {
    table_name: "dim_dataflow_orders",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Just int_dataflow_orders materialized as dict for efficient rows retrieval by extract order id and timetables",
  },
  {
    table_name: "int_dataflow_orders",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Intermediate model with all dataflow orders as datatable+extract+load combinations",
  },
  {
    table_name: "stg_aws_access_keys_global",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Contains details for Montana AWS access keys, including date created, user email, key id",
  },
  {
    table_name: "stg_aws_access_keys_montana",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Contains details for global AWS access keys, including date created, user email, key id",
  },
  {
    table_name: "stg_gsheet_typeform_post_engagement_survey",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Table with data from CS CSAT Gsheet Post-Engagement Survey",
  },
  {
    table_name: "stg_gsheet_typeform_customer_experience_survey",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Table with data from CS CSAT Gsheet Customer Experience Survey",
  },
  {
    table_name: "int_ga4_mixpanel_attribution_touchpoints",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Intermediate model for calculation all single and multitouch attribution model. Do not use it for analysis.",
  },
  {
    table_name: "biz_qa_alert_historical_extract_did_not_start",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "The model contains information about extracts for which the historical download did not start",
  },
  {
    table_name: "stg_gsheets_ps_capacity_planning",
    datasource_title: "",
    report_type_title: "",
    table_description: "Model with capacity for PS team",
  },
  {
    table_name: "biz_qa_alert_extract_without_timetable",
    datasource_title: "",
    report_type_title: "",
    table_description: "the model contains extracts without a schedule",
  },
  {
    table_name: "int_agencies_with_default_workspace_ids",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "In addition to all agencies details and ids, contains default workspace id for each agency",
  },
  {
    table_name: "biz_dts_load_anomalies_by_days",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "The model is dedicated to observing loads' rows for the desired day for historical anomalies for all Improvado with granularity by days",
  },
  {
    table_name: "biz_dts_load_anomalies_by_days_with_now_param",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "The model is dedicated to observing loads' rows for anomalies from now to the beginning of the day for all Improvado with granularity by days",
  },
  {
    table_name: "biz_dts_load_anomalies_by_datasources",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "The model for viewing total rows for the desired day for historical anomalies using standard deviation and z-score, granularity by data source",
  },
  {
    table_name: "biz_dts_load_anomalies_by_datasources_with_now_param",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "The model for viewing total rows from now to the beginning of the day using standard deviation and z-score, granularity by data source",
  },
  {
    table_name: "int_dts_load_order_facets",
    datasource_title: "",
    report_type_title: "",
    table_description:
      "Experimental model with dict structure for efficient retrieval of facets (static metadata by ODL) related to load orders ",
  },
];
