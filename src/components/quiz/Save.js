import React, { useState } from "react";
import { FormControl, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
// api
import api from "../../../src/services/api";

// styles
import useStyles from "../styles";

// components
import SubmitButton from "../SubmitButton";

export default function SaveQuiz(props) {
  let history = useHistory();
  const style = useStyles(),
    [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [title, setTitle] = useState(""),
    [score, setScore] = useState(""),
    [theme, setTheme] = useState(""),
    [alternative, setAlternative] = useState(""),
    createQuestion = async (event) => {
      event.preventDefault();
      const quiz = await api.post("v1/quizzes", {
        name,
        description,
        theme,
        score,
        classId: props.classId,
      });
      const quizzes = props.quizzes;
      console.log(quizzes);
      quizzes.push(quiz.data);
      props.setQuizzes(quizzes);
      props.setShowModal(false);
      history.push(`/app/course/classe/quiz/details/${quiz.data.id}`);
    };

  return (
    <FormControl className={style.form}>
      <Stack direction="row" alignItems="center" width="100%" spacing={10}>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Nome"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Stack>
      <Stack direction="row" alignItems="center" width="100%" spacing={10}>
        <TextField
          fullWidth
          size="3"
          required
          id="outlined-required"
          label="Descrição"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Stack>
      <Stack direction="row" alignItems="center" width="100%" spacing={10}>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Nota do Quiz"
          name="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <TextField
          fullWidth
          id="outlined-required"
          label="Tema"
          name="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </Stack>

      <SubmitButton subimit={createQuestion}  />
    </FormControl>
  );
}
