use chrono::{format::ParseError, NaiveDate};

use crate::models::student::Student;
use chrono::{DateTime, Local, Utc};

fn convert_date_format(input_date: &str) -> Result<String, ParseError> {
    let date = NaiveDate::parse_from_str(input_date, "%Y-%m-%d")?;
    Ok(date.format("%m/%d/%Y").to_string())
}

pub fn convert_student_format(input_student: Vec<Student>) -> Vec<Student> {
    input_student
        .iter()
        .map(|x| Student {
            id: x.id.clone(),
            first_name: x.first_name.clone(),
            last_name: x.last_name.clone(),
            name: x.name.clone(),
            email: x.email.clone(),
            mobile: x.mobile.clone(),
            address: x.address.clone(),
            date_of_birth: Some(
                convert_date_format(x.date_of_birth.clone().unwrap_or_default().as_str()).unwrap(),
            ),
            suburb: x.suburb.clone(),
            city: x.city.clone(),
            class: x.class.clone(),
            number_of_class: x.number_of_class,
            status: x.status.clone(),
            post_code: x.post_code.clone(),
            avatar_url: x.avatar_url.clone(),
            start_date_1: x.start_date_1.clone(),
            start_date_2: x.start_date_2.clone(),
            number_of_month: x.number_of_month.clone(),
            references: x.references.clone(),
            number_of_class_per_week: x.number_of_class_per_week.clone(),
            number_of_minute_per_class:x.number_of_minute_per_class.clone()
        })
        .collect::<Vec<Student>>()
}

pub fn convert_local_date(date: Option<String>) -> Option<String> {
    // Parse the UTC string into a DateTime<Utc>
    let utc_date_time =
        date.map(|date| DateTime::parse_from_rfc3339(&date).unwrap_or(DateTime::default()));

    // Convert to local time
    let local_date_time = utc_date_time.map(|utc_date_time| utc_date_time.with_timezone(&Local));

    // Formatting the DateTime object into a string suitable for display
    local_date_time.map(|local_date_time| local_date_time.format("%Y-%m-%dT%H:%M:%S").to_string())
}

pub fn local_date_student(x: Student) -> Student {
    Student {
        id: x.id.clone(),
        first_name: x.first_name.clone(),
        last_name: x.last_name.clone(),
        name: Some(format!("{}{}", x.first_name, x.last_name)),
        email: x.email.clone(),
        mobile: x.mobile.clone(),
        address: x.address.clone(),
        date_of_birth: x.date_of_birth.clone(),
        suburb: x.suburb.clone(),
        city: x.city.clone(),
        class: x.class.clone(),
        number_of_class: x.number_of_class,
        status: x.status.clone(),
        post_code: x.post_code.clone(),
        avatar_url: x.avatar_url.clone(),
        start_date_1: convert_local_date(x.start_date_1.clone()),
        start_date_2: x.start_date_2.clone(),
        number_of_month: x.number_of_month.clone(),
        references: x.references.clone(),
        number_of_class_per_week:x.number_of_class_per_week.clone(),
        number_of_minute_per_class:x.number_of_minute_per_class.clone()
    }
}

pub fn full_name_student(x: Student) -> Student {
    Student {
        id: x.id.clone(),
        first_name: x.first_name.clone(),
        last_name: x.last_name.clone(),
        name: Some(format!("{}{}", x.last_name,x.first_name)),
        email: x.email.clone(),
        mobile: x.mobile.clone(),
        address: x.address.clone(),
        date_of_birth: x.date_of_birth.clone(),
        suburb: x.suburb.clone(),
        city: x.city.clone(),
        class: x.class.clone(),
        number_of_class: x.number_of_class,
        status: x.status.clone(),
        post_code: x.post_code.clone(),
        avatar_url: x.avatar_url.clone(),
        start_date_1: x.start_date_1.clone(),
        start_date_2: x.start_date_2.clone(),
        number_of_month: x.number_of_month.clone(),
        references: x.references.clone(),
        number_of_class_per_week:x.number_of_class_per_week.clone(),
        number_of_minute_per_class:x.number_of_minute_per_class.clone()
    }
}
