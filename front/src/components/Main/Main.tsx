import {useEffect, useState} from "react";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import Cat from "../Cat/Cat.tsx";
import '../Cat/Cat.css'
import { CatImagesData } from '../../Dto/CatImagesData.tsx';

export default function Main({ currentPage }) {

    const [cats, setCats] = useState([]);
    const [liked_cats, setLikedCats] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;
    const theCatAPI = new TheCatAPI(`${apiKey}`, {host: "https://api.thecatapi.com/v1"});
    const [errorOccurred, setErrorStatus] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAllCats() {
            try {
                const images = await theCatAPI.images.searchImages({
                    limit: 5,
                });
                setCats(images);
                setErrorStatus(false);
            } catch (error) {
                setErrorStatus(true);
            } finally {
                setLoading(false);
            }
        }
        getAllCats();
    }, []);


    useEffect(() => {
        async function getFavouriteCats() {
            try {
                 const response = await fetch(`http://localhost:3000/likes`,
                     {
                         method: 'GET'
                     });
                const cid: CatImagesData = await response.json();
                setLikedCats(cid.data);
                setErrorStatus(false);
            } catch (error) {
                setErrorStatus(true);
            } finally {
                setLoading(false);
            }
        }
        getFavouriteCats();
    }, []);


    return (
        <main>
            { loading && (
                <p>Загрузка...</p>
            ) }
            { errorOccurred && (
                <p>Ошибка получения кошек</p>
            )}
            { currentPage === 'All cats' && (
                <div className={"All_cats_container"}>
                    {cats.map((cat) => (
                        <Cat key={cat.id} cat={cat}/>
                    ))}
                </div>
            )}
            { currentPage === 'Favourite cats' && (
                <div className={"Favourite_cats_container"}>
                    {liked_cats.map((cat) => (
                        <Cat key={cat.id} cat={cat}/>
                    ))}
                </div>
            )}

        </main>
    )
}