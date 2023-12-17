// // Prevents additional console window on Windows in release, DO NOT REMOVE!!
// #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// fn main() {
//   app_lib::run();
// }

#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
pub mod models;
#[tokio::main]
pub async fn main() {
  // Change demo_mobile_app to the name of your app!
  app_lib::AppBuilder::new().run();
}
