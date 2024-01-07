use chrono::{DateTime, NaiveDateTime, Utc, NaiveTime};
use serde::{Deserialize, Serialize};
use serde_json::to_string_pretty;

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Student {
    pub id: Option<String>,
    #[serde(alias = "firstName")]
    pub first_name: String,
    #[serde(alias = "lastName")]
    pub last_name: String,
    pub name: Option<String>,
    pub email: Option<String>,
    pub mobile: Option<String>,
    pub address: Option<String>,
    #[serde(alias = "dateOfBirth")]
    pub date_of_birth: Option<String>,
    pub suburb: Option<String>,
    pub city: Option<String>,
    pub class: String,
    #[serde(alias = "numberOfClass")]
    pub number_of_class: Option<u64>,
    pub status: Option<String>,
    #[serde(alias = "postCode")]
    pub post_code: Option<String>,
    #[serde(alias = "avatarUrl")]
    pub avatar_url: Option<String>,
    #[serde(alias = "startDate1")]
    pub start_date_1: Option<String>,
    #[serde(alias = "startDate2")]
    pub start_date_2: Option<String>,
    #[serde(alias = "numberOfMonth")]
    pub number_of_month: Option<u64>,
    pub references: Option<String>,
    #[serde(alias = "numberOfClassPerWeek")]
    pub number_of_class_per_week: Option<Vec<String>>,
    #[serde(alias = "numberOfMinutePerClass")]
    pub number_of_minute_per_class: Option<u64>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct RegisterStudent {
    pub id: Option<String>,
    #[serde(alias = "firstName")]
    pub first_name: String,
    #[serde(alias = "lastName")]
    pub last_name: String,
    pub name: Option<String>,
    pub email: Option<String>,
    pub mobile: Option<String>,
    pub address: Option<String>,
    #[serde(alias = "dateOfBirth")]
    pub date_of_birth: Option<String>,
    pub suburb: Option<String>,
    pub city: Option<String>,
    pub class: String,
    #[serde(alias = "numberOfClass")]
    pub number_of_class: Option<u64>,
    #[serde(alias = "numberOfClassPerWeek")]
    pub number_of_class_per_week: Option<Vec<String>>,

    #[serde(alias = "numberOfMinutePerClass_monday")]
    pub number_of_minutes_per_class_monday: Option<u64>,
    #[serde(alias = "numberOfClassPerWeek_tuesday")]
    pub number_of_minutes_per_class_tuesday: Option<u64>,
    #[serde(alias = "numberOfClassPerWeek_wednesday")]
    pub number_of_minutes_per_class_wednesday: Option<u64>,
    #[serde(alias = "numberOfClassPerWeek_thursdays")]
    pub number_of_minutes_per_class_thursdays: Option<u64>,
    #[serde(alias = "numberOfClassPerWeek_friday")]
    pub number_of_minutes_per_class_friday: Option<u64>,
    #[serde(alias = "numberOfClassPerWeek_saturday")]
    pub number_of_minutes_per_class_saturday: Option<u64>,
    #[serde(alias = "numberOfClassPerWeek_sunday")]
    pub number_of_minutes_per_class_sunday: Option<u64>,

    pub status: Option<String>,
    #[serde(alias = "postCode")]
    pub post_code: Option<String>,
    #[serde(alias = "avatarUrl")]
    pub avatar_url: Option<String>,
    #[serde(alias = "startDate1")]
    pub start_date_1: DateTime<Utc>,
    #[serde(alias = "startDate2")]
    pub start_date_2: Option<String>,
    #[serde(alias = "numberOfMonth")]
    pub number_of_month: Option<u64>,
    #[serde(alias = "startTime_monday")]
    pub start_time_monday: Option<String>,
    #[serde(alias = "startTime_tuesday")]
    pub start_time_tuesday: Option<String>,
    #[serde(alias = "startTime_wednesday")]
    pub start_time_wednesday: Option<String>,
    #[serde(alias = "startTime_thursdays")]
    pub start_time_thursdays: Option<String>,
    #[serde(alias = "startTime_friday")]
    pub start_time_friday: Option<String>,
    #[serde(alias = "startTime_saturday")]
    pub start_time_saturday: Option<String>,
    #[serde(alias = "startTime_snuday")]
    pub start_time_sunday: Option<String>,
    pub references: Option<String>,
}

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct StudentRequest {
    pub id: String,
    pub first_name: String,
    pub last_name: String,
    pub name: String,
    pub email: Option<String>,
    pub mobile: Option<String>,
    pub address: Option<String>,
    pub date_of_birth: Option<String>,
    pub suburb: Option<String>,
    pub city: Option<String>,
    pub class: String,
    pub number_of_class: Option<u64>,
    pub status: Option<String>,
    pub post_code: Option<String>,
    pub avatar_url: Option<String>,
    pub start_date_1: DateTime<Utc>,
    pub start_date_2: Option<String>,
    pub number_of_month: Option<u64>,
    pub references: Option<String>,
}

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct StudentRegister {
    pub email_id: String,
    pub password: String,
    pub id: String,
    pub first_name: String,
    pub last_name: String,
    pub name: String,
    pub email: Option<String>,
    pub mobile: Option<String>,
    pub address: Option<String>,
    pub date_of_birth: Option<String>,
    pub suburb: Option<String>,
    pub city: Option<String>,
    pub class: String,
    pub number_of_class: Option<u64>,
    pub status: Option<String>,
    pub post_code: Option<String>,
    pub avatar_url: Option<String>,
    pub start_date_1: DateTime<Utc>,
    pub start_date_2: Option<String>,
    pub number_of_month: Option<u64>,
    pub references: Option<String>,
    pub number_of_class_per_week: Vec<ClassPerWeek>,
}

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct ClassPerWeek {
    pub class_type: String,
    pub day : String,
    pub start_time: NaiveTime,
    pub end_time: NaiveTime,
}
