import './Cat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import {useState} from "react";

export default function Cat({cat}) {

    const [isLiked, setIsLiked] = useState(false);
    const [delete_like_error, setDeleteLikeError] = useState(false);
    const [add_like_error, setAddLikeError] = useState(false);

    console.log()

   async function changeHeart({catId}) {
        setIsLiked(!isLiked);
        if (isLiked) {
            try {
                const response = await fetch(`http://localhost:3000/likes/${catId}`,
                    {
                        method: 'DELETE'
                    });
                setDeleteLikeError(!response.ok);
            } catch (err) {
                setDeleteLikeError(true);
            }
        } else {
            try {
                const data = {
                    cat_id: catId,
                    created_at: (new Date()).toISOString(),
                };
                console.log(data);
                const response = await fetch(`http://localhost:3000/likes`,
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                    });
                console.log(response);
                setAddLikeError(!response.ok);
            } catch (err) {
                setAddLikeError(true);
            }
        }
    }

    return (
        <>
            {delete_like_error && (
                <p>Ошибка удаления лайка</p>
            )}
            {add_like_error && (
                <p>Ошибка добавления лайка</p>
            )}
            {!delete_like_error && !add_like_error && (
                <div className={"cat_image_container"}>
                    <img className="cat_image" src={cat.url} alt="Cat image"/>
                    <FontAwesomeIcon
                        icon={isLiked ? solidHeart : regularHeart}
                        onClick={() => changeHeart(cat.id)}
                        className={'heart'}
                    />
                </div>
            )}
        </>
    )
}