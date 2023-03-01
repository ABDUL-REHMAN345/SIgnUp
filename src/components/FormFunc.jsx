// import { useState } from "react";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogActions from "@material-ui/core/DialogActions";

// function RegistrationButton(props) {
//   const [open, setOpen] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // your form submission logic here
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Button
//         type="submit"
//         variant="contained"
//         disabled={props.isSubmitting}
//         color="secondary"
//         onClick={handleSubmit}
//       >
//         {props.isSubmitting ? "Loading" : "Register"}
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Thank you for registering!</DialogTitle>
//         <DialogContent>
//           {/* you can add more content to the dialog here */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" autoFocus>
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }
// export default RegistrationButton;