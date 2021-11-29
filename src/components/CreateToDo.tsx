import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category }, ...oldToDos]);
        setValue("toDo", "");
    };
    return (
        <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                {...register("toDo", { required: "꼭 이걸 쓰세요" })}
                placeholder="할일"
            />
            <span>{errors?.toDo?.message}</span>
            <button>더하기</button>
        </form>
    );
}

export default CreateToDo;
