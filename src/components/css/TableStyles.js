import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 17,
  },
  body: {
    fontSize: 15,
  },
}))(TableCell);

export const styles = theme => ({
  root: {
    width: '89%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: 50,
    overflowX: 'auto',
  },
});
