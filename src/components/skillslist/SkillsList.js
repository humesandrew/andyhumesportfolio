import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveStack() {
  return (
    <div>
      <Stack
        direction={{ sm: "row", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom="10px"
      >
        <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/javascript.png"
            className="duPic"
          ></img>
          <p>Javascript</p>
        </Item>
        <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/react.png"
            className="duPic"
          ></img>
          <p>React</p>
        </Item>
        <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/node.png"
            className="duPic"
          ></img>
          <p>Node</p>{" "}
        </Item>
      </Stack>
      <Stack
        direction={{ sm: "row", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom="10px"
      >
        <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/bootstrap.png"
            className="duPic"
          ></img>
          <p>Bootstrap</p>
        </Item>
        
        <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/mongo.png"
            className="duPic"
          ></img>

          <p>MongoDB</p>
        </Item>
        <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/sql.png"
            className="duPic"
          ></img>
          <p>MySQL</p>
        </Item>
      </Stack>
      <Stack
        direction={{ sm: "row", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        marginBottom="10px"
      >
       <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/html.png"
            className="duPic"
          ></img>

          <p>HTML5</p>
        </Item>
        <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/mui.png"
            className="duPic"
          ></img>

          <p>MaterialUI</p>
        </Item>
        <Item sx={{ width: "100%" }}>
          <img
            alt="Andy Humes - Junior Developer"
            src="../img/css.png"
            className="duPic"
          ></img>

          <p>CSS</p>
        </Item>
     
      </Stack>
    </div>
  );
}
