import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import "./extrasmodal.css";

import resumeData from "../../resumeData.js";

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

export default function ExtrasModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card
        onClick={handleOpen}
        className="extrasModal"
        sx={{ maxWidth: 125, height: 300 }}
      >
        <div className="extrasTitle">Accolades</div>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h4"
            noWrap
            sx={{
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            
              justifyContent: "center"
            }}
          >
            Volunteer
          </Typography>
          <Grid item md={12} sm={12} xs={12} className="extrasModalBody">
          <div>
               <div className="volunteerList">
            {
              resumeData.volunteer && resumeData.volunteer.map((item)=>{
                return(
                  <div>
                <br></br>
                   <div className="volunteerName"> {item.name}</div>
                  
                 {item.role}
            <br></br>
            <a href={item.url}  target="_blank" rel="noreferrer">Click to visit</a>
                 
                 <br></br>
                  </div>
                )
              })
            }
          </div>
       
            </div>

           
          </Grid>
          
          <Typography
            variant="h4"
            noWrap
            sx={{
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              marginTop: "50px",
              justifyContent: "center"
            }}
          >
            Publications
          </Typography>
          <Grid item md={12} sm={12} xs={12} className="extrasModalBody">
         
          <div className="publicationList">
      {
        resumeData.publication && resumeData.publication.map((item)=>{
          return(
            <div>
            
            <br></br>
                   <div className="publicationName"> {item.description}</div>
                  
             {item.name}. Originally published {item.date}.
            
           <br></br>
          
          <a href={item.image}  target="_blank" rel="noreferrer">Click to read</a>
        
         
         
           
           
            </div>
          )
        })
      }
    </div>
           </Grid>
        
        </Box>
        
      </Modal>
    </div>
  );
}
