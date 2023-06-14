import React, { useState } from "react";
import "./quizStyle.css";
import { IquizData, quizData } from "./Quizdata";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Quizresult from "./Quizresult";

export default function QuizCompo() {

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectOption, setSelectOption] = useState<any>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [select, setSelect] = useState<any>('');

  // Next-Question
  const handleChangeQue = () => {
       handleClickAns();
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectOption(0);
    } else {
        setShowResult(true);
    }
  };

  // select-ans
  const handleClickAns = () => {
    if (selectOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
     localStorage.setItem("answer", JSON.stringify({selectOption}));
    } else {
        console.log("wrong" , score);
    }
};

// back-btn
const handlePrevios = ()=>{
   if (currentQuestion > 0) {
     setCurrentQuestion(currentQuestion - 1);
   }
}

    const handleCheck = (e:any) =>{
      setSelect(e.target.value)
      console.log(e.target.value);
    }


  return (
    <Box>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Box
            sx={{
              paddingTop: "15%",
              fontSize: "30px",
              color: "#00b8d4",
              fontWeight: "800",
            }}
          >
            React Quiz
          </Box>
          <Box className="box_Container" sx={{ bgcolor: "white" }}>
            {showResult ? (
              <Quizresult score={score} totalScore={quizData.length} />
            ) : (
              <>
                <Box sx={{ padding: "5%" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "500", fontSize: "19px" }}
                  >
                    <span>{currentQuestion + 1}. </span>
                    {quizData[currentQuestion].question}
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "1%" }}>
                  {quizData[currentQuestion].options.map((option, i) => {
                    return (
                      <Box key={i} sx={{ marginLeft: "20%" }}>
                        {quizData[currentQuestion].type === "radio" ? (
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={select}
                            onChange={(e: any) => handleCheck(e)}
                          >
                            <FormControlLabel
                              value={option}
                              control={<Radio />}
                              label={option}
                              onClick={() => setSelectOption(i + 1)}
                            />
                          </RadioGroup>
                        ) : (
                          <FormGroup>
                            <FormControlLabel
                              
                              control={<Checkbox />}
                              label={option}
                              onClick={() => setSelectOption(i + 1)}
                            />
                          </FormGroup>
                        )}
                      </Box>
                    );
                  })}
                </Box>

                <Button
                  disabled={currentQuestion === 0}
                  onClick={handlePrevios}
                  variant="contained"
                  sx={{
                    marginTop: "3%",
                    marginBottom: "5%",
                    paddingX: "5%",
                    marginRight: "3%",
                  }}
                >
                  previous
                </Button>

                <Button
                  onClick={handleChangeQue}
                  variant="contained"
                  sx={{
                    marginTop: "3%",
                    marginBottom: "5%",
                    paddingX: "5%",
                  }}
                >
                  Next
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}





