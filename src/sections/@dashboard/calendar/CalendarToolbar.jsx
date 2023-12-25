import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Stack, Button, Typography, IconButton, MenuItem } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Iconify from '../../../components/iconify';
import MenuPopover from '../../../components/menu-popover';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'dayGridMonth', label: 'Tháng', icon: 'ic:round-view-module' },
  { value: 'timeGridWeek', label: 'Tuần', icon: 'ic:round-view-week' },
  { value: 'timeGridDay', label: 'Ngày', icon: 'ic:round-view-day' },
  { value: 'listWeek', label: 'Buổi học', icon: 'ic:round-view-agenda' },
];

// ----------------------------------------------------------------------

CalendarToolbar.propTypes = {
  onToday: PropTypes.func,
  onNextDate: PropTypes.func,
  onPrevDate: PropTypes.func,
  onOpenFilter: PropTypes.func,
  onChangeView: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  view: PropTypes.oneOf(['dayGridMonth', 'timeGridWeek', 'timeGridDay', 'listWeek']),
};

export default function CalendarToolbar({
  date,
  view,
  onToday,
  onNextDate,
  onPrevDate,
  onChangeView,
  onOpenFilter,
}) {
  const isDesktop = useResponsive('up', 'sm');

  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const selectedItem = VIEW_OPTIONS.filter((item) => item.value === view)[0];

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 2.5, pr: 2 }}
      >
        {isDesktop && (
          <Button
            color="inherit"
            onClick={handleOpenPopover}
            startIcon={<Iconify icon={selectedItem.icon} />}
            endIcon={<Iconify icon="eva:chevron-down-fill" />}
            sx={{
              py: 0.5,
              pl: 1.5,
              bgcolor: 'action.selected',
              '& .MuiButton-endIcon': { ml: 0.5 },
            }}
          >
            {selectedItem.label}
          </Button>
        )}

        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={onPrevDate}>
            <Iconify icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <Typography variant="h6">{fDate(date)}</Typography>

          <IconButton onClick={onNextDate}>
            <Iconify icon="eva:arrow-ios-forward-fill" />
          </IconButton>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Button size="small" color="error" variant="contained" onClick={onToday}>
            Hôm nay
          </Button>

          <IconButton onClick={onOpenFilter}>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Stack>
      </Stack>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="top-left"
        sx={{ width: 160 }}
      >
        {VIEW_OPTIONS.map((viewOption) => (
          <MenuItem
            key={viewOption.value}
            onClick={() => {
              handleClosePopover();
              onChangeView(viewOption.value);
            }}
            sx={{
              ...(viewOption.value === view && {
                bgcolor: 'action.selected',
              }),
            }}
          >
            <Iconify icon={viewOption.icon} />
            {viewOption.label}
          </MenuItem>
        ))}
      </MenuPopover>
    </>
  );
}
