exports = module.exports = function aql () {
    return new AQL();
};

function AQL() {
  this.functions = {};
  
  this.functions.numeric = {
    abs : function (numeric_exp) {},
    ceiling : function (numeric_exp) {},
    floor : function (numeric_exp) {},
    round : function (numeric_exp) {},
    round_half_to_even : function (numeric_exp) {}
  };

  this.functions.string = {
    string_to_codepoint : function (string_exp) {},
    codepoint_to_string : function (list_exp) {},
    contains : function (string_exp, substring_to_contain) {},
    like : function (string_exp, string_pattern) {},
    starts_with : function (string_exp, substring_to_start_with) {},
    ends_with : function (string_exp, substring_to_end_with) {},
    string_concat : function (list_exp) {},
    string_join : function (list_exp, string_exp) {},
    lowercase : function (string_exp) {},
    uppercase : function (string_exp) {},
    matches : function (string_exp, string_pattern) {},
    replace : function (string_exp, string_pattern, string_replacement, string_flags) {
      // string_flags is an optional param, so can be null.
    },
    string_length : function (string_exp) {},
    substring : function (string_exp, offset, length) {
      // length is an optional param, so can be null    
    },
    substring_before : function (string_exp, string_pattern) {},
    substring_after : function (string_exp, string_pattern) {}
  };
  
  this.functions.aggregate = {
    count : function (list) {},
    avg : function (num_list) {},
    sum : function (num_list) {},
    min : function (num_list) {},
    max : function (num_list) {},
    sql_count : function (list) {},
    sql_avg : function (num_list) {},
    sql_sum : function (num_list) {},
    sql_min : function (num_list) {},
    sql_max : function (num_list) {}
  };
  
  this.functions.spatial = {
    create_point : function (x, y) {},
    create_line : function (point_exp1, point_exp2) {},
    create_rectangle : function (point_exp1, point_exp2) {},
    create_circle : function (point_exp, radius) {},
    create_polygon : function (list_exp) {},
    get_x : function (point_exp) {},
    get_y : function (point_exp) {},
    get_points : function (spatial_exp) {},
    get_center : function (circle_exp) {},
    get_radius : function (circle_exp) {},
    spatial_distance : function (point_exp1, point_exp2) {},
    spatial_area : function (spatial_2d_exp) {},
    spatial_intersect : function (spatial_exp1, spatial_exp2) {},
    spatial_cell : function (point_exp1, point_exp2, x_inc, y_inc) {}
  };
  
  this.functions.similarity = {
    edit_distance : function (exp1, exp2) {},
    edit_distance_check : function (exp1, exp2, threshold) {},
    edit_distance_contains : function (exp1, exp2, threshold) {},
    similarity_jaccard : function (list_exp1, list_exp2) {},
    similarity_jaccard_check : function (list_exp1, list_exp2, threshold) {},
    // TODO: decide how best to represent similarity operator ~= syntax
  };
  
  this.functions.tokenizing = {
    word_tokens : function (string_exp) {}
  };
  
  this.functions.temporal = {
    get_year : function (temporal_exp) {},
    get_month : function (temporal_exp) {},
    get_day : function (temporal_exp) {},
    get_hour : function (temporal_exp) {},
    get_minute : function (temporal_exp) {},
    get_second : function (temporal_exp) {},
    get_millisecond : function (temporal_exp) {},
    adjust_datetime_for_timezone : function (datetime_exp, string_exp) {},
    adjust_time_for_timezone : function (time_exp, string_exp) {},
    calendar_duration_from_datetime : function (datetime_exp, duration_exp) {},
    get_year_month_duration : function (duration_exp) {},
    get_day_time_duration : function (duration_exp) {},
    months_from_year_month_duration : function (duration_exp) {},
    milliseconds_from_day_time_duration : function (duration_exp) {},
    duration_from_months : function (number_exp) {},
    duration_from_ms : function (number_exp) {},
    duration_from_interval : function (interval_exp) {},
    current_date : function () {},
    current_time : function () {},
    current_datetime : function () {},
    get_date_from_datetime : function (datetime_exp) {},
    get_time_from_datetime : function (datetime_exp) {},
    day_of_week : function (date_exp) {},
    date_from_unix_time_in_days : function (numeric_exp) {},
    datetime_from_unix_time_in_ms : function (numeric_exp) {},
    datetime_from_unix_time_in_secs : function (numeric_exp) {},
    datetime_from_date_time : function (date_exp,time_exp) {},
    time_from_unix_time_in_ms : function (numeric_exp) {},
    parse_date : function (date_exp, formatting_exp) {},
    parse_time : function (date_exp, formatting_exp) {},
    parse_datetime : function (date_exp, formatting_exp) {},
    print_date : function (date_exp, formatting_exp) {},
    print_time : function (date_exp, formatting_exp) {},
    print_datetime : function (date_exp, formatting_exp) {},
    get_interval_start : function (interval) {},
    get_interval_end : function (interval) {},
    get_interval_start_date : function (interval) {},
    get_interval_start_datetime : function (interval) {},
    get_interval_start_time : function (interval) {},
    get_interval_end_date : function (interval) {},
    get_interval_end_datetime : function (interval) {},
    get_interval_end_time : function (interval) {},
    get_overlapping_interval : function (interval_exp_1, interval_exp_2) {},
    interval_bin : function (time_to_bin, time_bin_anchor, duration_bin_size) {},
    interval_from_date : function (string_exp1, string_exp2) {},
    interval_from_time : function (string_exp1, string_exp2) {},
    interval_from_datetime : function (string_exp1, string_exp2) {},
    interval_start_from_date : function (date, duration) {},
    interval_start_from_time : function (time, duration) {},
    interval_start_from_datetime : function (datetime, duration) {},
    overlap_bins : function (interval_exp, time_bin_anchor, duration_bin_size) {},

    // Allen's Relations Temporal Functions
    interval_before : function (interval1, interval2) {},
    interval_after : function (interval1, interval2) {},
    interval_covers : function (interval1, interval2) {},
    interval_covered_by : function (interval1, interval2) {},
    interval_overlaps : function (interval1, interval2) {},
    interval_overlapped_by : function (interval1, interval2) {},
    interval_overlapping : function (interval1, interval2) {},
    interval_meets : function (interval1, interval2) {},
    interval_met_by : function (interval1, interval2) {},
    interval_starts : function (interval1, interval2) {},
    interval_started_by : function (interval1, interval2) {},
    interval_ends : function (interval1, interval2) {},
    interval_ended_by : function (interval1, interval2) {}
  };
  
  this.functions.other = {
    len : function (list_exp) {},
    is_null : function (variable) {},
    is_system_null : function (variable) {},
    not : function (variable) {},
    create_uuid : function () {},
    switch_case : function () {
      // arguments[] _> condition, case1, case1_result, ... , default_case, default_result    
    }
  };
}
