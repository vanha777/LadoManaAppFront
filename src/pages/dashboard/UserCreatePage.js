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

// ----------------------------------------------------------------------

export default function UserCreatePage() {
  const { themeStretch } = useSettingsContext();

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
