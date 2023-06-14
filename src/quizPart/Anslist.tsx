import { Box, Button,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { quizData } from './Quizdata';
import './quizStyle.css';
import { Link } from "react-router-dom";
export default function Anslist() {
  return (
    <Box>
      <TableContainer>
        <Table
          sx={{
            width: "50%",
            marginLeft: "10%",
            marginTop: "3%",
            border: "1px solid gray",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500" }}>
                Questions
              </TableCell>
              <TableCell sx={{ fontSize: "20px", fontWeight: "500" }}>
                Answer
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quizData.map((list, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{list.question}</TableCell>
                  <TableCell>{list.correct}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Button sx={{marginTop:"3%"}} variant="contained">
        <Link className="link_item" to={"/"}>
          Try again
        </Link>
      </Button>
    </Box>
  );
}
