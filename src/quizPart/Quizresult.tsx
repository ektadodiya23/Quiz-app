import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./quizStyle.css";


export default function Quizresult(props: any) {

return (
    <Box>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "500",
            fontSize: "19px",
            marginBottom: "3%",
            paddingTop: "4%",
          }}
        >
          Your Score : {props.score}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "500", fontSize: "19px", paddingBottom: "3%" }}
        >
          Total Score : {props.totalScore}
        </Typography>
        <Button sx={{marginBottom:"4%"}} variant="contained">
          <Link className="link_item" to={"/ansList"}>
            show answer
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
