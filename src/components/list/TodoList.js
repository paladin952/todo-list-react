import React from "react";
import TodoRow from "./TodoRow";
import {VerticalContainer, VerticalMargin} from "../general/Generic";
import styled from "styled-components";
import List from "@material-ui/core/List";

const Margin = styled(VerticalMargin)`height: 5px`;

const TodoList = ({data, completedIndexes, onRemove, onComplete}) => {

    const rows = data.map((t, i) => {

        const isCompleted = completedIndexes.indexOf(i) !== -1;

        return <VerticalContainer key={i + " " + t} >
            <TodoRow
                value={t}
                isCompleted={isCompleted}
                onRemove={() => onRemove(i)}
                onComplete={() => onComplete(i)}
            />
            <Margin/>
        </VerticalContainer>
    });

    return <List>{rows}</List>
};

export default TodoList;