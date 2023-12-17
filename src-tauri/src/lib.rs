// #[cfg_attr(mobile, tauri::mobile_entry_point)]
// pub fn run() {
//   tauri::Builder::default()
//     .run(tauri::generate_context!())
//     .expect("error while running tauri application");
// }
pub mod models;
use models::student::Student;

use serde_json::json;
use tauri::App;
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
    // let client = reqwest::Client::new();
    // let response = client
    //     .post("http://localhost:1010/image")
    //     .json(&serde_json::json!({
    //         "input":input
    //     }))
    //     .send()
    //     .await
    //     .map_err(|e| e.to_string())?;
    // let res = response
    //     .json::<String>()
    //     .await
    //     .map_err(|e| e.to_string())?;

    //dummy data 4 now
    let res = vec![
        vec![Student {
            id: "1".into(),
            first_name: "Alice".into(),
            last_name: "Ferguson".into(),
            date_of_birth: "10/10/1996".into(),
            class: "piano".into(),
            number_of_class: 1,
            status: "pending".into(),
        }],
        vec![Student {
            id: "2".into(),
            first_name: "Bob".into(),
            last_name: "Smith".into(),
            date_of_birth: "08/15/1995".into(),
            class: "guitar".into(),
            number_of_class: 5,
            status: "false".into(),
        }],
        vec![Student {
            id: "3".into(),
            first_name: "Charlie".into(),
            last_name: "Johnson".into(),
            date_of_birth: "11/22/1994".into(),
            class: "violin".into(),
            number_of_class: 3,
            status: "true".into(),
        }],
        // ... more rows
    ];

    Ok(res)
}

#[tauri::command]
async fn delete_student(id: Vec<String>) -> Result<Vec<Vec<Student>>, String> {
    // Assuming Student struct and other necessary imports are already defined.

    // Original dummy data.
    let data = vec![
        vec![Student {
            id: "1".into(),
            first_name: "Alice".into(),
            last_name: "Ferguson".into(),
            date_of_birth: "10/10/1996".into(),
            class: "piano".into(),
            number_of_class: 1,
            status: "pending".into(),
        }],
        vec![Student {
            id: "2".into(),
            first_name: "Bob".into(),
            last_name: "Smith".into(),
            date_of_birth: "08/15/1995".into(),
            class: "guitar".into(),
            number_of_class: 5,
            status: "false".into(),
        }],
        vec![Student {
            id: "3".into(),
            first_name: "Charlie".into(),
            last_name: "Johnson".into(),
            date_of_birth: "11/22/1994".into(),
            class: "violin".into(),
            number_of_class: 3,
            status: "true".into(),
        }],
        // ... more rows
    ];

    // Using filter_map to remove the students with the given ids.
    let filtered_data: Vec<Vec<Student>> = data
        .into_iter()
        .map(|group| {
            group
                .into_iter()
                .filter(|student| !id.contains(&student.id))
                .collect()
        })
        .filter(|group: &Vec<Student>| !group.is_empty()) // Optional: remove empty groups
        .collect();

    Ok(filtered_data)
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
                delete_student
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
