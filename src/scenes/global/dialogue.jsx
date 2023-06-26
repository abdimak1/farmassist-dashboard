import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Dialog
      sx={{
        "& .MuiDialog-paper":{
            backgroundColor: colors.blueAccent[700],

        }
       
      }}
     
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure! you want to delete this user account?"}</DialogTitle>

        <DialogActions>
          <Button
            sx={{
              color: colors.grey[100],
            }}
            onClick={props.onClose}
          >
            Disagree
          </Button>
          <Button
            sx={{
              color: colors.grey[100],
            }}
            onClick={props.cancel}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
