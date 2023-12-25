import { Helmet } from 'react-helmet-async';
import { paramCase } from 'change-case';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { invoke } from '@tauri-apps/api/core'
// @mui
import {
  Tab,
  Tabs,
  Card,
  Table,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _userList } from '../../_mock/arrays';
// components
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import ConfirmDialog from '../../components/confirm-dialog';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import { useSnackbar } from '../../components/snackbar';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from '../../components/table';
// sections
import { UserTableToolbar, UserTableRow } from '../../sections/@dashboard/user/list';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = ['Tất cả', 'Đi Học', 'Tạm Dừng', 'Nghỉ Học'];

const ROLE_OPTIONS = [
  'tất cả',
  'piano',
  'guitar',
  'violin',
  'vocal',
];

const TABLE_HEAD = [
  { id: 'name', label: 'Tên', align: 'left' },
  { id: 'date_of_birth', label: 'Ngày Sinh', align: 'left' },
  { id: 'class', label: 'Môn Học', align: 'left' },
  { id: 'number_of_class', label: 'Số Buổi Học', align: 'center' },
  { id: 'status', label: 'Trạng Thái', align: 'left' },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function UserListPage() {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const { themeStretch } = useSettingsContext();
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  // main student list
  const [tableData, setTableData] = useState([]);
  // end

  // Get User Data 
  const fetchStudent = async () => {
    try {
      const response = await invoke("get_all_student");
      console.log("Invoke fn from Rust BE:", response);
      return response;
    } catch (error) {
      console.error("Error:", error);
      const dummy = [
        [{ id: 1, first_name: "Error", last_name: "", date_of_birth: "", class: "", number_of_class: 1, status: "false" }],
        // ... more rows
      ];
      return dummy;
    }
  }
  // End.

  useEffect(() => {
    const fetchData = async () => {
      const students = await fetchStudent();
      // examples API
      // const user = [
      //   [{ id: 1, first_name: "Alice", last_name: "Ferguson", date_of_birth: "10/10/1996", class: "piano", number_of_class: 1, status: "pending"}],
      //   [{ id: 2, first_name: "Bob", last_name: "Smith", date_of_birth: "08/15/1995", class: "guitar", number_of_class: 5, status: "false" }],
      //   [{ id: 3, first_name: "Charlie", last_name: "Johnson", date_of_birth: "11/22/1994", class: "violin", number_of_class: 3, status: "true" }],
      //   // ... more rows
      // ];
      await setTableData(students);
    }
    fetchData();
  }, []);

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterName, setFilterName] = useState('');

  const [filterRole, setFilterRole] = useState('tất cả');

  const [filterStatus, setFilterStatus] = useState('tất cả');

  const dataFiltered =
    applyFilter({
      inputData: tableData,
      comparator: getComparator(order, orderBy),
      filterName,
      filterRole,
      filterStatus,
    })

  const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const denseHeight = dense ? 52 : 72;

  const isFiltered = filterName !== '' || filterRole !== 'all' || filterStatus !== 'all';

  const isNotFound =
    (!dataFiltered?.length && !!filterName) ||
    (!dataFiltered?.length && !!filterRole) ||
    (!dataFiltered?.length && !!filterStatus);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleFilterStatus = (event, newValue) => {
    setPage(0);
    setFilterStatus(newValue);
  };

  const handleFilterName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleFilterRole = (event) => {
    setPage(0);
    setFilterRole(event.target.value);
  };

  const handleDeleteRow = async (id) => {
    console.log("this is delete id", id);
    try {
      const response = await invoke("delete_student", { id });
      console.log("Invoke fn from Rust BE:", response);
      enqueueSnackbar('Delete success!');
      await setTableData(response);
    } catch (error) {
      console.error("Error:", error);
      enqueueSnackbar('Delete Error!', error);
    }
    if (page > 0) {
      if (dataInPage.length < 2) {
        setPage(page - 1);
      }
    }
  };

  // delete student
  // const handleDeleteRows = (selectedRows) => {
  //   console.log("this is selected rows",selected);
  //   const deleteRows = tableData.filter((row) => !selectedRows.includes(row.id));
  //   setSelected([]);
  //   setTableData(deleteRows);

  //   if (page > 0) {
  //     if (selectedRows.length === dataInPage.length) {
  //       setPage(page - 1);
  //     } else if (selectedRows.length === dataFiltered.length) {
  //       setPage(0);
  //     } else if (selectedRows.length > dataInPage.length) {
  //       const newPage = Math.ceil((tableData.length - selectedRows.length) / rowsPerPage) - 1;
  //       setPage(newPage);
  //     }
  //   }
  // };
  // end.


  const handleEditRow = (id) => {
    console.log(`selected ${id}`)
    navigate(PATH_DASHBOARD.user.edit(paramCase(`${id}`)));
  };

  const handleResetFilter = () => {
    setFilterName('');
    setFilterRole('tất cả');
    setFilterStatus('tất cả');
  };

  return (
    <>
      <Helmet>
        <title> User: List | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Danh Sách Học Viên"
          links={[
            { name: 'Trang Chủ', href: PATH_DASHBOARD.root },
            // { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'Học Viên' },
          ]}
          action={
            <Button
              component={RouterLink}
              to={PATH_DASHBOARD.user.new}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Ghi Danh
            </Button>
          }
        />

        <Card>
          <Tabs
            value={filterStatus}
            onChange={handleFilterStatus}
            sx={{
              px: 2,
              bgcolor: 'background.neutral',
            }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>

          <Divider />

          <UserTableToolbar
            isFiltered={isFiltered}
            filterName={filterName}
            filterRole={filterRole}
            optionsRole={ROLE_OPTIONS}
            onFilterName={handleFilterName}
            onFilterRole={handleFilterRole}
            onResetFilter={handleResetFilter}
          />

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={dense}
              numSelected={selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  tableData.map((row) => row[0].id)
                )
              }
              action={
                <Tooltip title="Xóa">
                  <IconButton color="primary" onClick={handleOpenConfirm}>
                    <Iconify icon="eva:trash-2-outline" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row[0].id)
                    )
                  }
                />

                {/* table body */}
                <TableBody>
                  {dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <UserTableRow
                        key={row[0].id}
                        row={row[0]}
                        selected={selected.includes(row[0].id)}
                        onSelectRow={() => onSelectRow(row[0].id)}
                        onDeleteRow={() => handleDeleteRow(row[0].id)}
                        onEditRow={() => handleEditRow(row[0].id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                  />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>

                {/* table body end. */}

              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
            //
            dense={dense}
            onChangeDense={onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Xóa"
        content={
          <>
            Bạn có chắc chắn muốn xóa <strong> {selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRow(selected);
              handleCloseConfirm();
            }}
          >
            Xóa
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filterName, filterStatus, filterRole }) {
  const stabilizedThis = inputData.map((el, index) => [el, index]);
  // const stabilizedThis = inputData.map((el, index) => el.push(index));
  console.log(inputData)

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    inputData = inputData.filter(
      (user) => user[0].last_name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus === 'Đi Học') {
    inputData = inputData.filter((user) => user[0].status === "true");
  }

  if (filterStatus === 'Tạm Dừng') {
    inputData = inputData.filter((user) => user[0].status === "pending");
  }

  if (filterStatus === 'Nghỉ Học') {
    inputData = inputData.filter((user) => user[0].status === "false");
  }

  if (filterRole !== 'tất cả') {
    console.log(filterRole)
    inputData = inputData.filter((user) => user[0].class === filterRole);
  }

  return inputData;
}
