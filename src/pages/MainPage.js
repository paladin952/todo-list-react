import React, {useState, useEffect} from "react";
import {VerticalContainer, VerticalMargin} from "../components/general/Generic";
import styled from "styled-components";
import TodoInput from "../components/list/TodoInput";
import TodoList from "../components/list/TodoList";
import ApiService from "../services/ApiService";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled(VerticalContainer)`
  width: 767px;
  align-items: center;
  
  @media screen and (max-width: 767px) {
     width: 100%;
     padding-left: 16px;
     padding-right: 16px;
  }
`;

const Title = styled.h1`
`;

const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [completedIndexes, setCompletedIndexes] = useState([]);

    const loadData = async () => {
        setLoading(true);
        const data = await ApiService.getData()
            .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    const onRemove = (index) => {
        const newList = [...data];
        if (index > -1 && index < data.length) {

            const completedIndexOf = completedIndexes.indexOf(index);
            if (completedIndexOf !== -1) {
                const newCompletedIndexes = [...completedIndexes];
                newCompletedIndexes.splice(completedIndexOf, 1);
                setCompletedIndexes(newCompletedIndexes);
            }

            newList.splice(index, 1);
            setData(newList);
        }
    };

    const onComplete = (index) => {
        const indexOf = completedIndexes.indexOf(index);
        const completed = indexOf !== -1;
        if (completed) {
            const newIndexes = [...completedIndexes];
            newIndexes.splice(indexOf, 1);
            setCompletedIndexes(newIndexes);

        } else {
            setCompletedIndexes([...completedIndexes, index]);
        }
    };

    return (
        <Container>
            {loading ? <CircularProgress/>
                : <div>
                    <Title>Todo List</Title>

                    <TodoInput
                        onSelected={newVal => {
                            if (newVal) {
                                setData([...data, newVal])
                            }
                        }}
                    />

                    <VerticalMargin/>

                    <TodoList
                        data={data}
                        completedIndexes={completedIndexes}
                        onRemove={onRemove}
                        onComplete={onComplete}
                    />
                </div>
            }
        </Container>
    );
};

export default MainPage;