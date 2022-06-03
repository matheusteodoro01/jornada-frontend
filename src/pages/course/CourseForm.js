import React, { useState } from 'react';
import { FormControl, TextField, Collapse } from '@material-ui/core';

// styles
import useStyles from "../../components/styles";

// components
import Classesgrid from "./classes/ClasesGrid";
import SubmitButton from "../../components/SubmitButton";

export default function CourseForm(props) {
    const style = useStyles(),
        [id, setId] = useState(props.data ?.id),
        [name, setName] = useState(props.data ?.name),
        [description, setDescription] = useState(props.data ?.description),
        [classes, setClasses] = useState(props.data ?.classes),
        subimitClick = (event) => {
            props.submitFuntion(props.isUpdate, { id, name, description });
            event.preventDefault();
        };
    return (
        <FormControl className={style.form}>
            <legend>{props.title}</legend>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Nome"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                // InputProps={{
                //     readOnly: props.isUpdate,
                // }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Descrição"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <Collapse in={props.isUpdate} style={{ width: '100%' }}>
                <Classesgrid classes={classes} reloadAll={props.reloadAll} courseId={id} />
            </Collapse>
            <SubmitButton subimit={subimitClick}/>
        </FormControl >
    );
}