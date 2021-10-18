import CreatePost from "../../Components/CreatePost/CreatePost";
import {savePostType} from "../../types/types";
import {useState} from "react";
import {savePostValidator} from "../../validators/validators";
import {ThunkDispatch} from "redux-thunk";
import {GlobalStateType} from "../../redux/store";
import {ActionsTypes, savePost} from "../../redux/posts-reducer";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

type AppDispatch = ThunkDispatch<GlobalStateType, void, ActionsTypes>;

const New = () => {
    const [errors, setErrors] = useState<Array<string>>([]);
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter();

    const savePostFc = (obj: savePostType) => {
        let errors = savePostValidator(obj);
        if(errors.length === 0) {
            dispatch(savePost(obj))
            router.push('/');
        } else {
            setErrors(errors);
            return
        }
    }

    return (
        <CreatePost
            savePostFc={savePostFc}
            errors={errors}
        />
    )
}

export default New;