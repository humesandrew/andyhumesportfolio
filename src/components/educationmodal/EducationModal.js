import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import "./educationmodal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EducationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card
        onClick={handleOpen}
        className="educationModal"
        sx={{ maxWidth: 125, height: 250 }}
      >
        <div className="educationTitle">Education</div>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h3"
            noWrap
            sx={{
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              marginBottom: "10px",
              justifyContent: "center"
            }}
          >
            Education
          </Typography>
          <Grid item md={12} sm={12} xs={12} className="educationModalBody">
            <img
              alt="University of Denver logo"
              src="../img/dulogosmall.png"
              className="first"
            ></img>

            <h3 className="duItem">University of Denver</h3>
            <p className="duText">
              Certificate of Completion: Full Stack Web Development{" "}
            </p>
          </Grid>
          {/* <Grid item md={12} sm={12} xs={12} className="educationModalBody">
            <img
              alt="Colorado State University logo"
              src="../img/csulogosmall.png"
              className="second"
            ></img>

            <h3 className="csuItem">Colorado State University</h3>
            <p className="csuText">Master of Biomedical Science</p>
          </Grid> */}
          <Grid item md={12} sm={12} xs={12} className="educationModalBody">
            <img
              alt="The Ohio State University logo"
              src="../img/osulogosmall.png"
              className="third"
            ></img>
            <h3 className="osuItem">The Ohio State University</h3>
            <p className="osuText">Bachelor of Science: Molecular Biology</p>
            <p className="osuText">Bachelor of Arts: Anthropology</p>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
