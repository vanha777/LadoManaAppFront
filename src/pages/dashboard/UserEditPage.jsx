import { Helmet } from 'react-helmet-async';
import { paramCase } from 'change-case';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _userList } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
// sections
import UserNewEditForm from '../../sections/@dashboard/user/UserNewEditForm';
import { invoke } from '@tauri-apps/api/core';

// ----------------------------------------------------------------------

export default function UserEditPage() {
  const { themeStretch } = useSettingsContext();
  const { name } = useParams();
  console.log(`user id ${name}`)

  useEffect(() => {
  // Get User Data 
  const fetchStudent = async () => {
    try {
      const response = await invoke("get_student",{uuid:name});
      console.log("get student response", response);
      setCurrentUser(response);
    } catch (error) {
      console.error("Error:", error);
      const dummy = [
        [{ id: 1, first_name: "Error", last_name: "", date_of_birth: "", class: "", number_of_class: 1, status: "false" }],
        // ... more rows
      ];
      return dummy;
    }
  }
  fetchStudent();
    // const currentUser = {
    //   id: "123",
    //   first_name: "Alice",
    //   last_name: "Johnson",
    //   avatar_url: "http://example.com/avatar.jpg",
    //   number_of_class: 15,
    //   number_of_month: 6,
    //   status: "pending",
    //   class: "piano",
    //   date_of_birth: "1996/10/10",
    //   email: "alice.johnson@example.com",
    //   mobile: "1234567890",
    //   address: "456 Park Avenue",
    //   suburb: "Greenwood",
    //   city: "Springfield",
    //   post_code: "98765",
    //   start_date_1:"2023-12-25T00:00:00",
    //   start_date_2:"2023-12-25T00:00:00"
    //   // ... other properties of currentUser if needed
    // };
    // setCurrentUser(currentUser);
  }, [name]);

  const [currentUser, setCurrentUser] = useState();



  // const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <>
      <Helmet>
        <title> User: Edit user | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Chi Tiết Học Sinh"
          links={[
            {
              name: 'Trang Chủ',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Học Viên',
              href: PATH_DASHBOARD.user.list,
            },
            { name: currentUser?.first_name },
          ]}
        />

        <UserNewEditForm isEdit currentUser={currentUser} />
      </Container>
    </>
  );
}
