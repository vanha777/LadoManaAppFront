use serde::{Serialize, Deserialize};
use serde_json::to_string_pretty;

#[derive(Serialize, Deserialize)]
pub struct Student {
    pub id: String,
    pub first_name: String,
    pub last_name: String,
    pub date_of_birth: String,
    pub class: String,
    pub number_of_class: u32,
    pub status: String,
}
