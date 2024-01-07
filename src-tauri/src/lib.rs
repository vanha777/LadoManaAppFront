// #[cfg_attr(mobile, tauri::mobile_entry_point)]
// pub fn run() {
//   tauri::Builder::default()
//     .run(tauri::generate_context!())
//     .expect("error while running tauri application");
// }
pub mod models;
pub mod ultilities;
use std::{env, fmt::format, ops::Deref};

use chrono::{Duration, NaiveTime};
use models::{
    class::{ClassTypeSql, UpdateClassRequest, UpdateClassStatusRequest},
    student::{ClassPerWeek, RegisterStudent, Student, StudentRegister, StudentRequest},
};

use serde_json::{json, Value};
use tauri::App;
use ultilities::{
    convert_local_date, convert_student_format, full_name_student, local_date_student,
};
#[cfg(mobile)]
mod mobile;
#[cfg(mobile)]
pub use mobile::*;
pub type SetupHook = Box<dyn FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send>;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
async fn get_all_student() -> Result<Vec<Vec<Student>>, String> {
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}get-all-student", madcatz_server))
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let res = convert_student_format(
        response
            .json::<Vec<Student>>()
            .await
            .map_err(|e| e.to_string())?,
    );
    let mutate_res = res
        .iter()
        .map(|x| vec![x.clone()])
        .collect::<Vec<Vec<Student>>>();

    // //dummy data
    // let res = vec![
    //     vec![Student {
    //         id: "1".into(),
    //         first_name: "Alice".into(),
    //         last_name: "Ferguson".into(),
    //         date_of_birth: "10/10/1996".into(),
    //         class: "piano".into(),
    //         number_of_class: 1,
    //         status: "pending".into(),
    //         ...
    //     }]
    // ];

    Ok(mutate_res)
}

#[tauri::command]
async fn delete_student(id: Vec<String>) -> Result<Vec<Vec<Student>>, String> {
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}delete-student", madcatz_server))
        .json(&id)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    match response.status().is_success() {
        true => {
            let res = get_all_student().await?;
            Ok(res)
        }
        false => {
            return Err(response
                .text()
                .await
                .unwrap_or("Failed to delete students".to_string()))
        }
    }

    // }
    // Assuming Student struct and other necessary imports are already defined.

    // Original dummy data.
    // let data = vec![
    //     vec![Student {
    //         id: "1".into(),
    //         first_name: "Alice".into(),
    //         last_name: "Ferguson".into(),
    //         date_of_birth: "10/10/1996".into(),
    //         class: "piano".into(),
    //         number_of_class: 1,
    //         status: "pending".into(),
    //     }],
    //     vec![Student {
    //         id: "2".into(),
    //         first_name: "Bob".into(),
    //         last_name: "Smith".into(),
    //         date_of_birth: "08/15/1995".into(),
    //         class: "guitar".into(),
    //         number_of_class: 5,
    //         status: "false".into(),
    //     }],
    //     vec![Student {
    //         id: "3".into(),
    //         first_name: "Charlie".into(),
    //         last_name: "Johnson".into(),
    //         date_of_birth: "11/22/1994".into(),
    //         class: "violin".into(),
    //         number_of_class: 3,
    //         status: "true".into(),
    //     }],
    //     // ... more rows
    // ];

    // // Using filter_map to remove the students with the given ids.
    // let filtered_data: Vec<Vec<Student>> = data
    //     .into_iter()
    //     .map(|group| {
    //         group
    //             .into_iter()
    //             .filter(|student| !id.contains(&student.id))
    //             .collect()
    //     })
    //     .filter(|group: &Vec<Student>| !group.is_empty()) // Optional: remove empty groups
    //     .collect();

    // Ok(filtered_data)
}

#[tauri::command]
async fn create_student(payload: RegisterStudent) -> Result<u64, String> {
    let mut classes: Vec<ClassPerWeek> = Vec::new();

    match payload.number_of_minutes_per_class_monday {
        Some(x) => {
            let start_time =
                NaiveTime::parse_from_str(&payload.start_time_monday.clone().unwrap_or_default(), "%H:%M")
                    .expect("Invalid time format");
            // Add the period to the time
            let (end_time, _) =
                start_time.overflowing_add_signed(Duration::minutes(x as i64));

            let value = ClassPerWeek {
                class_type: payload.class.clone(),
                day: "monday".to_string(),
                start_time,
                end_time,
            };
            classes.push(value);
        }
        None => (),
    };
    match payload.number_of_minutes_per_class_tuesday {
        Some(x) => {
            let start_time =
                NaiveTime::parse_from_str(&payload.start_time_tuesday.unwrap_or_default(), "%H:%M")
                    .expect("Invalid time format");
            // Add the period to the time
            let (end_time, _) =
                start_time.overflowing_add_signed(Duration::minutes(x as i64));

            let value = ClassPerWeek {
                class_type: payload.class.clone(),
                day: "tuesday".to_string(),
                start_time,
                end_time,
            };
            classes.push(value);
        }
        None => (),
    };
    match payload.number_of_minutes_per_class_wednesday {
        Some(x) => {
            let start_time =
                NaiveTime::parse_from_str(&payload.start_time_wednesday.clone().unwrap_or_default(), "%H:%M")
                    .expect("Invalid time format");
            // Add the period to the time
            let (end_time, _) =
                start_time.overflowing_add_signed(Duration::minutes(x as i64));

            let value = ClassPerWeek {
                class_type: payload.class.clone(),
                day: "wednesday".to_string(),
                start_time,
                end_time,
            };
            classes.push(value);
        }
        None => (),
    };
    match payload.number_of_minutes_per_class_thursdays {
        Some(x) => {
            let start_time =
                NaiveTime::parse_from_str(&payload.start_time_thursdays.clone().unwrap_or_default(), "%H:%M")
                    .expect("Invalid time format");
            // Add the period to the time
            let (end_time, _) =
                start_time.overflowing_add_signed(Duration::minutes(x as i64));

            let value = ClassPerWeek {
                class_type: payload.class.clone(),
                day: "thursdays".to_string(),
                start_time,
                end_time,
            };
            classes.push(value);
        }
        None => (),
    };
    match payload.number_of_minutes_per_class_friday {
        Some(x) => {
            let start_time =
                NaiveTime::parse_from_str(&payload.start_time_friday.clone().unwrap_or_default(), "%H:%M")
                    .expect("Invalid time format");
            // Add the period to the time
            let (end_time, _) =
                start_time.overflowing_add_signed(Duration::minutes(x as i64));

            let value = ClassPerWeek {
                class_type: payload.class.clone(),
                day: "friday".to_string(),
                start_time,
                end_time,
            };
            classes.push(value);
        }
        None => (),
    };
    match payload.number_of_minutes_per_class_saturday {
        Some(x) => {
            let start_time =
                NaiveTime::parse_from_str(&payload.start_time_saturday.clone().unwrap_or_default(), "%H:%M")
                    .expect("Invalid time format");
            // Add the period to the time
            let (end_time, _) =
                start_time.overflowing_add_signed(Duration::minutes(x as i64));

            let value = ClassPerWeek {
                class_type: payload.class.clone(),
                day: "saturday".to_string(),
                start_time,
                end_time,
            };
            classes.push(value);
        }
        None => (),
    };
    match payload.number_of_minutes_per_class_sunday {
        Some(x) => {
            let start_time =
                NaiveTime::parse_from_str(&payload.start_time_sunday.clone().unwrap_or_default(), "%H:%M")
                    .expect("Invalid time format");
            // Add the period to the time
            let (end_time, _) =
                start_time.overflowing_add_signed(Duration::minutes(x as i64));

            let value = ClassPerWeek {
                class_type: payload.class.clone(),
                day: "sunday".to_string(),
                start_time,
                end_time,
            };
            classes.push(value);
        }
        None => (),
    };

    let new_student = StudentRegister {
        id: "".to_string(),
        password: payload.first_name.clone(),
        first_name: payload.first_name.clone(),
        last_name: payload.last_name.clone(),
        name: format!(
            "{} {}",
            payload.first_name.clone(),
            payload.last_name.clone()
        ),
        email_id: payload.email.clone().unwrap_or_default(),
        mobile: payload.mobile.clone(),
        address: payload.address.clone(),
        date_of_birth: payload.date_of_birth.clone(),
        email: payload.email.clone(),
        suburb: payload.suburb.clone(),
        city: payload.city.clone(),
        class: payload.class.clone(),
        number_of_class: payload.number_of_class.clone(),
        status: payload.status.clone(),
        post_code: payload.post_code.clone(),
        avatar_url: payload.avatar_url.clone(),
        start_date_1: payload.start_date_1.clone(),
        start_date_2: payload.start_date_2.clone(),
        number_of_month: payload.number_of_month.clone(),
        references: payload.references.clone(),
        number_of_class_per_week: classes,
    };
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}register", madcatz_server))
        .json(&new_student)
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let res = response.json::<u64>().await.map_err(|e| e.to_string())?;

    Ok(res)
}

#[tauri::command]
async fn get_student(uuid: &str) -> Result<Student, String> {
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}get-student", madcatz_server))
        .json(&uuid)
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let res = response
        .json::<Student>()
        .await
        .map_err(|e| e.to_string())?;

    Ok(local_date_student(res))
}

#[tauri::command]
async fn update_student(payload: Student) -> Result<Student, String> {
    let student = match payload.name {
        Some(_) => payload.clone(),
        None => full_name_student(payload.clone()),
    };
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}update-student", madcatz_server))
        .json(&student)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    match response.status().is_success() {
        true => {
            let res = get_student(&payload.id.unwrap_or_default()).await?;
            Ok(res)
        }
        false => return Err(response.text().await.unwrap_or("Failed".to_string())),
    }
}

#[tauri::command]
async fn login(email: &str, password: &str) -> Result<Value, String> {
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}login", madcatz_server))
        .json(&json!({
            "email":email,
            "password":password
        }))
        .send()
        .await
        .map_err(|e| e.to_string())?;

    let res = response.json::<Value>().await.map_err(|e| e.to_string())?;

    Ok(res)
}

#[tauri::command]
async fn update_class(payload: UpdateClassRequest) -> Result<u64, String> {
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}update-class", madcatz_server))
        .json(&payload)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    match response.status().is_success() {
        true => Ok(200),
        false => return Err(response.text().await.unwrap_or("Failed".to_string())),
    }
}

#[tauri::command]
async fn get_class_type() -> Result<Vec<ClassTypeSql>, String> {
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}get-class-type", madcatz_server))
        .send()
        .await
        .map_err(|e| e.to_string())?;

    let res = response
        .json::<Vec<ClassTypeSql>>()
        .await
        .map_err(|e| e.to_string())?;

    Ok(res)
}

#[tauri::command]
async fn update_class_status(payload: UpdateClassStatusRequest) -> Result<u64, String> {
    let madcatz_server =
        env::var("MADCATZ_SERVER").unwrap_or_else(|_| "http://localhost:1010/".to_string());
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{}update-class-status", madcatz_server))
        .json(&payload)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    match response.status().is_success() {
        true => Ok(200),
        false => return Err(response.text().await.unwrap_or("Failed".to_string())),
    }
}

#[derive(Default)]
pub struct AppBuilder {
    setup: Option<SetupHook>,
}
impl AppBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[must_use]
    pub fn setup<F>(mut self, setup: F) -> Self
    where
        F: FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send + 'static,
    {
        self.setup.replace(Box::new(setup));
        self
    }
    pub fn run(self) {
        let setup = self.setup;
        tauri::Builder::default()
            .setup(move |app| {
                if let Some(setup) = setup {
                    (setup)(app)?;
                }
                Ok(())
            })
            .invoke_handler(tauri::generate_handler![
                greet,
                get_all_student,
                delete_student,
                login,
                update_student,
                get_student,
                delete_student,
                update_class,
                update_class_status,
                create_student,
                get_class_type
            ])
            .run(tauri::generate_context!())
            .expect("error while running tauri application");
    }
}
#[cfg(mobile)]
fn do_something() {
    println!("Hello from Mobile!");
}
#[cfg(desktop)]
fn do_something() {
    println!("Hello from Desktop!");
}
fn run() {
    if cfg!(mobile) {
        println!("Hello from Mobile!");
    } else {
        println!("Hello from Desktop!");
    }
}
