import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (category: IToDo["category"]) => {
        setToDos((oldToDos) => {
            const updatedToDos = oldToDos.map((toDo) => {
                if (toDo.id === id) {
                    return { ...toDo, category };
                }
                return toDo;
            });
            return updatedToDos;
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <button onClick={() => onClick(Categories.DOING)}>Doing</button>
            )}
            {category !== Categories.TO_DO && (
                <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
            )}
            {category !== Categories.DONE && (
                <button onClick={() => onClick(Categories.DONE)}>Done</button>
            )}
        </li>
    );
}

export default ToDo;
