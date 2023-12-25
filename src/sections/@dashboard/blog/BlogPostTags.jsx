import PropTypes from 'prop-types';
// @mui
import { Chip, Avatar, Checkbox, Stack, FormControlLabel } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';
import { CustomAvatarGroup } from '../../../components/custom-avatar';

// ----------------------------------------------------------------------

BlogPostTags.propTypes = {
  postData: PropTypes.object,
};

export default function BlogPostTags({ postData }) {
  const { post, profile, offers } = postData;
  const tags = [post.meta_postcode, post.meta_state, `${offers} Offers`]
  const favorite = post.meta_budget;
  const favoritePerson = [{
    name: profile.first_name,
    avatarUrl: profile.avatar_url

  }]

  return (
    <>
      <Stack direction="row" flexWrap="wrap">
        {tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ m: 0.5 }} />
        ))}
      </Stack>

      <Stack direction="row" alignItems="center">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              size="small"
              color="error"
              icon={<Iconify icon="emojione-monotone:money-bag" />}
              checkedIcon={<Iconify icon="emojione:money-bag" />}
            />
          }
          label={fShortenNumber(favorite)}
        />

        <CustomAvatarGroup>
          {favoritePerson.map((person) => (
            <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
          ))}
        </CustomAvatarGroup>
      </Stack>
    </>
  );
}
