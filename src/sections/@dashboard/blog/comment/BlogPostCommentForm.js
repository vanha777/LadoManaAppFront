
import axios from 'axios';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
// form
import { useForm } from 'react-hook-form';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { yupResolver } from '@hookform/resolvers/yup';
import Grid from '@mui/material/Grid';
// @mui
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import FormProvider, { RHFTextField } from '../../../../components/hook-form';



// ----------------------------------------------------------------------
BlogPostCommentForm.propTypes = {
  postData: PropTypes.object

};

export default function BlogPostCommentForm({ postData }) {
  const { profile, post } = postData

  const CommentSchema = Yup.object().shape({
    comment: Yup.string().required('Comment is required'),
    quotes: Yup.number().required('Name is required'),
    days: Yup.number().required('Email is required')
  });


  const defaultValues = {
    comment: '',
    quotes: '',
    days: '',
  };

  const methods = useForm({
    resolver: yupResolver(CommentSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      //  reset();
      console.log('DATA', data);
      const sendOffer = {
        quotes: data,
        posts: post,
        author: profile
      }

      const response = await axios.post('http://127.0.0.1:3333/offers', sendOffer, { withCredentials: true }); // send form Data to back-end
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} alignItems="flex-start">

        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
          <RHFTextField
            name="quotes"
            placeholder="Quotes"
            rows={1}
            fullWidth={false}
          />
          <RHFTextField
            name="days"
            placeholder="Estimated days"
            rows={1}
            fullWidth={false}
          />
        </Box>


        <RHFTextField
          name="comment"
          placeholder="Comments..."
          multiline
          rows={3}
        />

        <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
          Send Offer
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
