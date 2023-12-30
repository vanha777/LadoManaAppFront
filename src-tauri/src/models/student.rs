use chrono::{DateTime, NaiveDateTime, Utc};
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
}
