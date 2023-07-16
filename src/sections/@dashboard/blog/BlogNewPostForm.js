import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Grid, Card, Stack, Button, Typography } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import { useSnackbar } from '../../../components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from '../../../components/hook-form';
//
import BlogNewPostPreview from './BlogNewPostPreview';



// ----------------------------------------------------------------------

const TAGS_OPTION = [
  'Dress',
  'Ethnic Wear',
  'Sari Blouse',
  'Others',
];


const LOCATIONS_OPTION = [
  'New South Wales',
  'Victoria',
  'Queensland',
  'Western Australia',
  'South Australia',
  'Tasmania',
  'Australian Capital Territory',
  'Northern Territory',

];

// ----------------------------------------------------------------------

export default function BlogNewPostForm() {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [openPreview, setOpenPreview] = useState(false);

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    metaType: Yup.array().min(1, 'Must have at least 1 type').max(1, 'Maximum 1 type is allowed'),
    metaState: Yup.array().min(1, 'Must have at least 1 state').max(1, 'Maximum 1 state is allowed'),
    cover: Yup.mixed().required('Cover is required'),
    metaPostCode: Yup.number().required('Postcode is a number'),
    metaAddress: Yup.string().required('Address is required'),
    metaSuburb: Yup.string().required('Suburb is required'),
    metaBudget: Yup.number().required('Budget is a number'),
  });

  const defaultValues = {
    metaAddress: '',
    description: '',
    // content: '',
    cover: [],
    metaType: [],
    publish: true,
    comments: true,
    metaSuburb: '',
    metaPostCode: 0,
    metaBudget: 0,
    metaState: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const handleOpenPreview = () => {
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      handleClosePreview();
      enqueueSnackbar('Post success!');
      const arrayFile = data.cover
      console.log(typeof data.metaPostCode)

      // navigate(PATH_DASHBOARD.blog.posts); --off indevelopment mode
      // console.log('DATA', data.cover); ` this contain other info of thepost`
      // send this to back end


      // Create a new FormData object
      const formData = new FormData();

      // append file to formData
      arrayFile.forEach((file, index) => {
        formData.append('images', file);
      });
      // append post data to formData
      await Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });


      // console.log(formData.get('title')); // test and extract infos before send

      // console.log(typeof formData.get('metaPostCode'));
      const response = await axios.post('http://127.0.0.1:3333/test', formData, { withCredentials: true }); // send form Data to back-end
      console.log(response)

    } catch (error) {
      console.error(error);
    }
  };

  /* const handleDrop = useCallback(
     (acceptedFiles) => {
       const file = acceptedFiles[0]; // acceptedFiles[0] to upload 1 files
       console.log(file)
 
       const newFile = Object.assign(file, {
         preview: URL.createObjectURL(file),
       });
 
       if (file) {
         setValue('cover', newFile, { shouldValidate: true });
       }
     },
     [setValue]
   ); */
  const handleDrop = useCallback( // attentions mutated input data // cautions
    async (acceptedFiles) => {
      const newArray = values.cover;
      await Promise.allSettled(
        acceptedFiles.map(async (file) => {
          file.preview = URL.createObjectURL(file);
          newArray.push(file)
        })
      );
      if (acceptedFiles.length > 0) {
        setValue('cover', newArray, { shouldValidate: true });
      }

    },
    [setValue, values.cover]
  );



  const handleRemoveFile = () => {
    setValue('cover', null);
  };

  const handleRemoveOne = (e) => {
    const removedFile = e.name
    const filteredArray = values.cover.filter((item) => item.name !== removedFile);
    console.log(filteredArray)
    setValue('cover', filteredArray);
  };

  const handleSetCover = (e) => {
    const imageName = e.name
    const getImage = values.cover.filter((image) => image.name !== imageName);
    const pushCover = getImage.unshift(e) // push selected files into index 0
    setValue('cover', getImage);
  };



  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <RHFTextField name="title" label="Post Title" />

              <RHFTextField name="description" label="Description" multiline rows={3} />
              {/* 
              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Content
                </Typography>

                <RHFEditor simple name="content" />
              </Stack>
*/}
              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Cover
                </Typography>

                <RHFUpload
                  onRemoveAll={handleRemoveFile}
                  onUpload
                  multiple
                  name="cover"
                  maxSize={3145728}
                  onDrop={handleDrop}
                  onDelete={handleRemoveFile}
                  thumbnail
                  onRemove={handleRemoveOne}
                  handleSetCover={handleSetCover}



                />
              </Stack>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <div>
                <RHFSwitch
                  name="publish"
                  label="Publish"
                  labelPlacement="start"
                  sx={{ mb: 1, mx: 0, width: 1, justifyContent: 'space-between' }}
                />

                <RHFSwitch
                  name="comments"
                  label="Enable comments"
                  labelPlacement="start"
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
              </div>

              <RHFAutocomplete
                name="metaType"
                label="Type"
                multiple
                freeSolo
                options={TAGS_OPTION.map((option) => option)}
                ChipProps={{ size: 'small' }}
              />

              <RHFTextField name="metaAddress" label="Street Address" />
              <RHFTextField name="metaSuburb" label="Suburb" />
              <RHFTextField name="metaPostCode" label="Postcode" />
              <RHFTextField name="metaBudget" label="Budget" />

              <RHFAutocomplete
                name="metaState"
                label="State"
                multiple
                freeSolo
                options={LOCATIONS_OPTION.map((option) => option)}
                ChipProps={{ size: 'small' }}
              />
            </Stack>
          </Card>

          <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
            <Button
              fullWidth
              color="inherit"
              variant="outlined"
              size="large"
              onClick={handleOpenPreview}
            >
              Preview
            </Button>

            <LoadingButton
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
            >
              Post
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>

      <BlogNewPostPreview
        values={values}
        open={openPreview}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={handleClosePreview}
        onSubmit={handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}
