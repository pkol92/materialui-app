import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { useState } from "react";

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export const DraggableDialog = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle}>Draggable dialog example</button>
      <Dialog
        open={open}
        onClose={toggle}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          This is draggable dialog
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Drag and move to see what happens. You can also click on the page to
            close this modal.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={toggle}>
            Cancel
          </Button>
          <Button
            onClick={toggle}
            color="success"
            variant="contained"
            className="bg-green-700"
          >
            Cool!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
