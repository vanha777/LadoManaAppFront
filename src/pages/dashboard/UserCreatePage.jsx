import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
// sections
import UserNewEditForm from '../../sections/@dashboard/user/UserNewEditForm';
import { invoke } from '@tauri-apps/api/core';

// ----------------------------------------------------------------------

export default function UserCreatePage() {
  const [classType, setClassType] = useState();

  const { themeStretch } = useSettingsContext();
  // use effect here and get class type
  useEffect(() => {
    // Get User Data 
    const fetchStudent = async () => {
      try {
        const response = await invoke("get_class_type");
        console.log("get class type response", response);
        setClassType(response);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchStudent();
  }, []);

  return (
    <>
      <Helmet>
        <title> User: Create a new user | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Ghi danh học sinh mới"
          links={[
            {
              name: 'Trang Chủ',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Học Viên',
              href: PATH_DASHBOARD.user.list,
            },
            { name: 'Ghi danh' },
          ]}
        />
        <UserNewEditForm />
      </Container>
    </>
  );
}
