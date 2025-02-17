import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  boxModalCourseForm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1150,
    background: "#FFFFFF",
    "border-radius": "25px",
    padding: 5,
    "max-height": "95%",
    overflow: "hidden",
    overflowY: "scroll", // added scroll
    "background-color": "rgba(255,255,255,0.87)",
  },
  boxModalClassesForm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    background: "#FFFFFF",
    "border-radius": "25px",
    padding: 5,
    "background-color": "rgba(255,255,255,0.87)",
    "max-height": "95%",
    overflow: "hidden",
    overflowY: "scroll", // added scroll
  },

  boxModalCreateQuizForm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "50%",
    maxWidth: "70%",
    background: "#FFFFFF",
    "border-radius": "25px",
    padding: 6,
    "background-color": "rgba(255,255,255,0.87)",
    "max-height": "90%",
    overflow: "hidden",
    overflowY: "scroll",
  },

  boxModalSaveAlternativeForm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "50%",
    maxWidth: "70%",
    background: "#FFFFFF",
    "border-radius": "25px",
    padding: 6,
    "background-color": "rgba(255,255,255,0.87)",
    "max-height": "100%",
    overflow: "hidden",
  },
  form: {
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "border-radius": "25px",
    padding: theme.spacing(4),

    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
    "& .MuiGrid-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    scroll: "true",
  },
}));
