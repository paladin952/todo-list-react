import React from "react";
import styled from "styled-components";
import {HorizontalContainer, HorizontalMargin} from "../general/Generic";
import {TransparentButton} from "../general/TransparentButton";

const Container = styled(HorizontalContainer)`
  min-height: 30px;
  background-color: #555555;
  width: 100%;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
`;

const Text = styled.span`
 color: white;
 font-weight: 500;
 
`;

const RemoveButton = styled.span`
 color: white;
 font-weight: bold;
`;

const MiddleSpace = styled.div`
 flex: 1;
`;

const TodoRow = ({value, onRemove, isCompleted, onComplete}) => {
    return <Container onClick={onComplete}>
        <HorizontalMargin/>

        <TransparentButton>
        <Text>
            {isCompleted ? <strike>{value}</strike> : value}
        </Text>
        </TransparentButton>

        <MiddleSpace/>

        <TransparentButton>
            <RemoveButton onClick={e => {
                e.stopPropagation();
                onRemove();
            }}>X</RemoveButton>
        </TransparentButton>

        <HorizontalMargin/>
    </Container>
};

export default TodoRow;