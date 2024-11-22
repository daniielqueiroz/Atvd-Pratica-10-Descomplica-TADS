import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';


export default function AlertDialog({onDeleteClick}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    onDeleteClick();
  }

  return (
    <React.Fragment>
    <Button variant="contained" color="error" onClick={handleClickOpen}><DeleteIcon fontSize="small" /></Button>            
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deseja realmente excluir esta tarefa?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao excluir essa tarefa, você não poderá recuperá-la.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCELAR</Button>
          <Button onClick={handleDelete} autoFocus color="error" >
            CONFIRMAR
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
