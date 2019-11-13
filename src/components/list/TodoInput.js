import React, {useState} from "react";
import {HorizontalContainer, HorizontalMargin} from "../general/Generic";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

const InputStyled = styled.input`
  height: 30px;
  min-width: 200px;
  padding-left: 16px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: bold;
  border-radius: 10px;
`;

const TodoInput = ({onSelected}) => {
    const [value, setValue] = useState("");

    const _onSelected = () => {
        onSelected(value);
        setValue("");
    };

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            _onSelected();
        }
    };

    return (
        <HorizontalContainer>
            <TextField
                placeholder="Task"
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                }}
                onKeyDown={_handleKeyDown}
            />
            <HorizontalMargin/>
            <Button
                    onClick={() => {
                        _onSelected();
                    }}
            >
                ADD
            </Button>
        </HorizontalContainer>
    )
};

export default TodoInput;
