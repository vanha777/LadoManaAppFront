import PropTypes from 'prop-types';
import * as Yup from 'yup';
import axios from 'axios';
import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton, DateTimePicker } from '@mui/lab';
import { TextField, Box, Card, Grid, Stack, Switch, Typography, FormControlLabel } from '@mui/material';
// utils
import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// assets
import { countries } from '../../../assets/data';
// components
import Label from '../../../components/label';
import { useSnackbar } from '../../../components/snackbar';
import FormProvider, {
  RHFSelect,
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
} from '../../../components/hook-form';


// ----------------------------------------------------------------------

UserNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentUser: PropTypes.object,

};

export default function UserNewEditForm({ isEdit = false, currentUser }) {

  function getStatusDescription(status) {
    if (status === "true") {
      return "Đi Học";
    } if (status === "pending") {
      return "Tạm Dừng";
    }
    return "Nghỉ Học"; // Default case for any other status
  }

  function getStatusColour(status) {
    if (status === "true") {
      return "success";
    } if (status === "pending") {
      return "warning";
    }
    return "error"; // Default case for any other status
  }

  const navigate = useNavigate();

  const newDate = currentUser?.profile.date_of_birth.substring(0, 10);


  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    firstName: Yup.string().required('Tên bắt buộc'),
    lastName: Yup.string().required('Họ bắt buộc'),
    email: Yup.string().notRequired().email('Email Không hợp lệ'),
    mobile: Yup.number().required('Số điện thoại bắt buộc'),
    address: Yup.string().notRequired(),
    //  country: Yup.string().required('Quốc gia bắt buộc'),
    dateOfBirth: Yup.date().required('Ngày sinh bắt buộc'),  // this is ngay sinh
    suburb: Yup.string().notRequired(),
    city: Yup.string().notRequired(),
    class: Yup.string().required('Môn học bắt buộc'),   // this is mon hoc
    // avatarUrl: Yup.mixed().required('Avatar is required'), 
    numberOfClass: Yup.number().required('Số Buổi Học bắt buộc'),
    status: Yup.string().required("Trạng Thái Đi Học bắt buộc"),
    postCode: Yup.string().notRequired(),
    avatarUrl: Yup.mixed().notRequired(),
    startDate1: Yup.date().required('Bắt đầu học bắt buộc'),
    startDate2: Yup.date().required('Bắt đầu học bắt buộc'),
    numberOfMonth: Yup.number().required("Thời gian hết hạn bắt buộc")
  });
  // if pass in Current User => Sua Doi if empty => Ghi Danh
  const defaultValues = useMemo(
    () => ({
      firstName: currentUser?.profile.first_name || '',
      lastName: currentUser?.profile.last_name || '',
      email: currentUser?.info?.email || '',
      mobile: currentUser?.info?.mobile || '',
      address: currentUser?.info?.address || '',
      //   country: currentUser?.country || '',
      suburb: currentUser?.info.suburb || '',
      city: currentUser?.info.city || '',
      postCode: currentUser?.info.post_code || 0,
      avatarUrl: currentUser?.profile.avatar_url || "",
      // isVerified: currentUser?.isVerified || true
      numberOfClass: currentUser?.profile.number_of_class || "",
      numberOfMonth: currentUser?.profile.number_of_month || "",
      status: currentUser?.profile.status || "false",
      dateOfBirth: newDate || "",
      class: currentUser?.profile.class || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const handleStatusChange = (event) => {
    // Use setValue to update the 'status' field in the form
    setValue('status', event.target.checked ? "true" : "false", { shouldValidate: true });
    console.log("student status", values.status);
  };


  useEffect(() => {
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);


  // SUBMIT FORMS 
  const onSubmit = async (data) => {

    try {
      if (!isEdit) {
        // CREATE NEW STUDENT
        console.log('CREATE', data);

        const response = await axios.post(
          'http://127.0.0.1:3333/students',
          data,
          { withCredentials: true }
        );
        console.log("user.ID", response)

        await new Promise((resolve) => setTimeout(resolve, 1000));
        enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
        // reset();

        //   navigate(PATH_DASHBOARD.user.list);

      }
      if (isEdit) {
        // EDIT EXISTING STUDENT
        console.log('EDIT', data);
        const id = currentUser?.profile.user_id
        const response = await axios.put(
          `http://127.0.0.1:3333/students/${id}`,
          data,
          { withCredentials: true }
        );
        console.log(response)

        await new Promise((resolve) => setTimeout(resolve, 1000));
        enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
        reset();

        navigate(PATH_DASHBOARD.user.list);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // Avatar Files hanlder 
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('avatarUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>

            <Label
              color={getStatusColour(values.status)}
              sx={{ textTransform: 'uppercase', position: 'absolute', top: 24, right: 24 }}
            >
              {getStatusDescription(values.status)}
            </Label>

            <Box sx={{ mb: 5 }}>
              <RHFUploadAvatar
                name="avatarUrl"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Cho Phép *.jpeg, *.jpg, *.png, *.gif
                    <br /> Kích Thước Tối Đa {fData(3145728)}
                  </Typography>
                }
              />
            </Box>

            <Controller
              name="status"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
                  labelPlacement="start"
                  control={
                    <Switch
                      checked={value === "true"}
                      onChange={(e) => onChange(e.target.checked ? "true" : "pending")}
                    />
                  }
                  label={
                    <>
                      <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                        Trạng Thái
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Tắt Trạng Thái Đi Học
                      </Typography>
                    </>
                  }
                />
              )}
            />

            {/* <RHFSwitch
              name="status"
              labelPlacement="start"
              checked={values.status}
              onChange={handleStatusChange}
              label={
                <>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Trạng Thái
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Tắt Trạng Thái Đi Học
                  </Typography>
                </>
              }
              sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
            //  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
            /> */}

            <RHFTextField
              name="numberOfClass"
              label="Số Buổi Học"
              helperText="Điều Chỉnh Số buổi học còn lại"
              type="number"
              // inputProps={{ min: 0 }} // Optionally, set a minimum value
              sx={{ mb: 2 }} // Adjust styling as needed
            />
            <RHFTextField
              name="numberOfMonth"
              label="Số tháng"
              helperText="Số tháng hết hạn"
              type="number"
              sx={{ mb: 2 }} // Adjust styling as needed
            />
            <RHFTextField
              name="numberOfClassPerWeek"
              disabled
              label="Số buổi"
              defaultValue="2 buổi / 1 tuần"
              helperText="Số buổi mỗi tuần"
              type="string"
              sx={{ mb: 2 }} // Adjust styling as needed
            />
            <RHFTextField
              name="numberOfMinutePerClass"
              disabled
              label="số tiếng"
              defaultValue="1 tiếng / 1 buổi"
              helperText="số giờ mỗi buổi"
              type="string"
              sx={{ mb: 2 }} // Adjust styling as needed
            />
            {!isEdit ? <> <RHFTextField name="startDate1" type="datetime-local" defaultValue="2023-10-10T19:30" helperText="Ngày học thứ nhất" />
              <RHFTextField name="startDate2" defaultValue="2023-10-10T19:30" type="datetime-local" helperText="Ngày học thứ hai" /> </> : <><RHFTextField name="startDate1" type="datetime-local" helperText="Ngày học thứ nhất" />
              <RHFTextField name="startDate2" type="datetime-local" helperText="Ngày học thứ hai" /></>}
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="firstName" label="Tên" />
              <RHFTextField name="lastName" label="Họ" />
              <RHFSelect
                native
                name="class"
                label="Môn Học"
              >
                <option value="" />
                <option value="piano">Piano</option>
                <option value="guitar">Guitar</option>
                <option value="violin">Violin</option>
                <option value="vocal">Vocal</option>
              </RHFSelect>
              <RHFTextField name="dateOfBirth" type="date" helperText="Ngày tháng năm sinh" />
              <RHFTextField name="email" label="Địa Chỉ Email" />
              <RHFTextField name="mobile" label="Số Điện Thoại" />
              <RHFTextField name="address" label="Địa Chỉ" />

              { /*   <RHFSelect native name="country" label="Quốc Gia" placeholder="Country" >
                <option value="" />
                {countries.map((country) => (
                  <option key={country.code} value={country.label}>
                    {country.label}
                  </option>
                ))}
                </RHFSelect> */ }

              <RHFTextField name="suburb" label="Quận Huyện" />
              <RHFTextField name="city" label="Thành Phố" />
              <RHFTextField name="postCode" label="Mã Bưu Điện" />

            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Tạo Học Sinh' : 'Lưu Thay Đổi'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
