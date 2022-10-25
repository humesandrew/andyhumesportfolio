import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import "./skillslist.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SkillsList() {
  return (
    <div id="Credentials">
      <Stack
        direction={{ sm: "row", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom="10px"
        
      >
        <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="react">
          <img
            alt="React.js logo"
            src="../img/react.png"
            
            
          ></img>
          <p>React</p>
        </Item>
        <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="js">
          <img
            alt="Javascript logo"
            src="../img/javascript.png"
      
          ></img>
          <p>Javascript</p>
        </Item>
        
        <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="node">
          <img
            alt="Node.js logo"
            src="../img/node.png"
          
          ></img>
          <p>Node</p>
        </Item>
      </Stack>
      <Stack
        direction={{ sm: "row", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom="10px"
      >
        <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="bootstrap">
          <img
            alt="Bootstrap logo"
            src="../img/bootstrap.png"
          
          ></img>
          <p>Bootstrap</p>
        </Item>
        
        <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="mongo">
          <img
            alt="MongoDB logo"
            src="../img/mongo.png"
          
          ></img>

          <p>MongoDB</p>
        </Item>
        <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="sql">
          <img
            alt="MySQL logo"
            src="../img/sql.png"
       
          ></img>
          <p>MySQL</p>
        </Item>
      </Stack>
      <Stack
        direction={{ sm: "row", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom="10px"
      >
       <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="html5">
          <img
            alt="HTML logo"
            src="../img/html.png"
           
          ></img>

          <p>HTML5</p>
        </Item>
        <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="mui">
          <img
            alt="Material UI logo"
            src="../img/mui.png"
      
          ></img>

          <p>MaterialUI</p>
        </Item>
        <Item sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} className="css6">
          <img
            alt="CSS logo"
            src="../img/css.png"
          
          ></img>

          <p>CSS</p>
        </Item>
     
      </Stack>
    </div>
  );
}
