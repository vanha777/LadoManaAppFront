import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Avatar, Typography, CardContent, Stack, Link } from '@mui/material';
import { id } from 'date-fns/locale';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Image from '../../../components/image';
import Iconify from '../../../components/iconify';
import TextMaxLine from '../../../components/text-max-line';
import SvgColor from '../../../components/svg-color';


// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  index: PropTypes.number,
  posts: PropTypes.object,
};

export default function BlogPostCard({ posts, index }) {
  const isDesktop = useResponsive('up', 'md');

  const { post, profile, offersCount } = posts
  console.log(post.id)

  const latestPost = index === 0 || index === 1 || index === 2;

  if (isDesktop && latestPost) {
    return (
      <Card>
        <Avatar
          alt={profile.first_name}
          src={profile.avatar_url}
          sx={{
            top: 24,
            left: 24,
            zIndex: 9,
            position: 'absolute',
          }}
        />

        <PostContent
          title={post.title}
          view={offersCount}
          comment={post.meta_budget}
          share={post.meta_state}
          createdAt={post.meta_type}
          index={index}
          postId={post.id}
        />

        <StyledOverlay />

        <Image alt="cover" src={post.images[0]} sx={{ height: 360 }} />
      </Card>
    );
  }

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <SvgColor
          src="/assets/shape_avatar.svg"
          sx={{
            width: 80,
            height: 36,
            zIndex: 9,
            bottom: -15,
            position: 'absolute',
            color: 'background.paper',
          }}
        />

        <Avatar
          alt={profile.first_name}
          src={profile.avatar_url}
          sx={{
            left: 24,
            zIndex: 9,
            width: 32,
            height: 32,
            bottom: -16,
            position: 'absolute',
          }}
        />

        <Image alt="cover" src={post.images[0]} ratio="4/3" />
      </Box>

      <PostContent
        title={post.title}
        view={offersCount}
        comment={post.meta_budget}
        share={post.meta_state}
        createdAt={post.meta_type}
        postId={post.id}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

PostContent.propTypes = {
  view: PropTypes.string,
  index: PropTypes.number,
  share: PropTypes.string,
  title: PropTypes.string,
  comment: PropTypes.number,
  createdAt: PropTypes.string,
  postId: PropTypes.any
};

export function PostContent({ title, view, comment, share, createdAt, index, postId }) {
  const isDesktop = useResponsive('up', 'md');

  console.log(postId)

  const linkTo = PATH_DASHBOARD.blog.view(postId);

  const latestPostLarge = index === 0;

  const latestPostSmall = index === 1 || index === 2;

  const POST_INFO = [
    { id: 'comment', value: comment, icon: 'eva:message-circle-fill' },
    { id: 'view', value: view, icon: 'eva:eye-fill' },
    { id: 'share', value: share, icon: 'eva:share-fill' },
  ];

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
        ...((latestPostLarge || latestPostSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: 'absolute',
          color: 'common.white',
        }),
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {createdAt}
      </Typography>

      <Link component={RouterLink} to={linkTo} color="inherit">
        <TextMaxLine
          variant={isDesktop && latestPostLarge ? 'h5' : 'subtitle2'}
          line={2}
          persistent
        >
          {title}
        </TextMaxLine>
      </Link>

      <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: 3,
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {POST_INFO.map((info) => (
          <Stack
            key={info.id}
            direction="row"
            alignItems="center"
            sx={{ typography: 'caption', ml: info.id === 'comment' ? 0 : 1.5 }}
          >
            <Iconify icon={info.icon} width={16} sx={{ mr: 0.5 }} />
            {info.value}
          </Stack>
        ))}
      </Stack>
    </CardContent>
  );
}
