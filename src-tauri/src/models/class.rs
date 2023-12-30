use chrono::{NaiveTime, DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct UpdateClassRequest {
    pub uuid: String,
    pub personal_information: String,
    pub r#type: String,
    pub start_time: DateTime<Utc>,
    pub end_time: DateTime<Utc>,
    pub status: Option<bool>,
    pub references: Option<String>,
}

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct Class {
    pub personal_information: String,
    pub r#type: String,
    pub start_time: DateTime<Utc>,
    pub end_time: DateTime<Utc>,
    pub status: Option<bool>,
    pub references: Option<String>,
}


#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct UpdateClassStatusRequest {
    pub uuid: String,
    pub status: Option<bool>,
}