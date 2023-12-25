import { Helmet } from 'react-helmet-async';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// @mui
import { Box, Divider, Stack, Container, Typography, Pagination } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// utils
import axios from '../../utils/axios';
// components
import Markdown from '../../components/markdown';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import { SkeletonPostDetails } from '../../components/skeleton';

// sections
import {
  BlogPostHero,
  BlogPostTags,
  BlogPostCard,
  BlogPostCommentList,
  BlogPostCommentForm,
} from '../../sections/@dashboard/blog';

// ----------------------------------------------------------------------

export default function BlogPostPage() {
  const { themeStretch } = useSettingsContext();

  const { title } = useParams();

  const [recentPosts, setRecentPosts] = useState([]);

  const [post, setPost] = useState(null);

  const [loadingPost, setLoadingPost] = useState(true);

  const [errorMsg, setErrorMsg] = useState(null);

  const getPost = useCallback(async () => {
    // get post/id from back-end
    try {
      const response = await axios.get(`http://127.0.0.1:3333/posts/${title}`, {
        withCredentials: true
      });
      console.log(response.data)
      //  const response = await axios.get('/api/blog/post', {
      //   params: { title },
      // });

      setPost(response.data);
      setLoadingPost(false);
    } catch (error) {

      console.error(error);
      setLoadingPost(false);
      setErrorMsg(error.message);
    }
  }, [title]);

  const getRecentPosts = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/posts/recent', {
        params: { title },
      });

      setRecentPosts(response.data.recentPosts);
    } catch (error) {
      console.error(error);
    }
  }, [title]);

  useEffect(() => {
    getRecentPosts();
  }, [getRecentPosts]);

  useEffect(() => {
    if (title) {
      getPost();
    }
  }, [getPost, title]);

  return (
    <>
      <Helmet>
        <title>{`Blog: ${post?.post.title || ''} | Minimal UI`}</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Post Details"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Blog',
              href: PATH_DASHBOARD.blog.root,
            },
            {
              name: post?.post.title,
            },
          ]}
        />

        {post && (
          <Stack
            sx={{
              borderRadius: 2,
              boxShadow: (theme) => ({
                md: theme.customShadows.card,
              }),
            }}
          >
            <BlogPostHero postData={post} />

            <Typography
              variant="h6"
              sx={{
                py: 5,
                px: { md: 5 },
              }}
            >
              {post.post.title}
            </Typography>

            <Markdown
              children={post.post.description}
              postData={post}
              sx={{
                px: { md: 5 },
              }}
            />

            <Stack
              spacing={3}
              sx={{
                py: 5,
                px: { md: 5 },
              }}
            >
              <Divider />

              <BlogPostTags postData={post} />

              <Divider />
            </Stack>

            <Stack
              spacing={2}
              sx={{
                px: { md: 5 },
              }}
            >
              <Stack>
                <Typography variant="h4">Your Offer</Typography>

              </Stack>
              <BlogPostCommentForm postData={post} />

              <Divider sx={{ mt: 5, mb: 2 }} />
            </Stack>





          </Stack>



        )}

        {errorMsg && !loadingPost && <Typography variant="h6">404 {errorMsg}</Typography>}

        {loadingPost && <SkeletonPostDetails />}

        {/*   {!!recentPosts.length && (
          <>
            <Typography variant="h4" sx={{ my: 5 }}>
              Recent posts
            </Typography>

            <Box
              gap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              }}
            >
              {recentPosts.slice(recentPosts.length - 4).map((recentPost) => (
                <BlogPostCard key={recentPost.id} post={recentPost} />
              ))}
            </Box>
          </>
              )} */}
      </Container >
    </>
  );
}
