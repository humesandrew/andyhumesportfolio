import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ChartMdItem from "../chartmditem/ChartMdItem";
import J4JItem from "../j4jitem/J4JItem";
import BellyBusterItem from "../bellybusteritem/BellyBusterItem";
import JsPortfolioItem from "../jsportfolioitem/JsPortfolioItem";
import EcommerceItem from "../ecommerceitem/EcommerceItem";
import TicTacReact from "../tictacreact/TicTacReact";
import DaySchedulerItem from "../dayscheduleritem/DaySchedulerItem";
import EmployeeDirItem from "../employeediritem/EmployeeDirItem";

import "./works.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Works() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="worksContainer">
      <Typography
              variant="h3"
              noWrap
              component="a"
              href="/"
              sx={{
                
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            > Works
              </Typography>
      <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}

      md={{height: "75%", width: "75%"}}
    
    >
     
      <Tabs
        orientation="vertical"
        max-width="100%"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Java4Java" {...a11yProps(0)} />
        <Tab label="ChartMD" {...a11yProps(1)} />
        <Tab label="Belly-Buster" {...a11yProps(2)} />
        <Tab label="Portfolio: JS" {...a11yProps(3)} />
        <Tab label="E-Commerce" {...a11yProps(4)} />
        <Tab label="Tic-Tac-React" {...a11yProps(5)} />
        <Tab label="Scheduler" {...a11yProps(6)} />
        <Tab label="Employee Directory" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <J4JItem />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChartMdItem /> 
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BellyBusterItem />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <JsPortfolioItem />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <EcommerceItem />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TicTacReact />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <DaySchedulerItem />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <EmployeeDirItem />
      </TabPanel>
    </Box>
    </Container>
  );
}
