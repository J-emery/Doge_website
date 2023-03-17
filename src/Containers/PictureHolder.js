import { useEffect, useState } from "react";
import AnimalPic from "../Components/AnimalPic";

const PictureHolder = () => {

    const [URL,setURL] = useState("")

    useEffect(() => {
        fetchURL();
    },[]);

    const fetchURL = async () => {
        const response = await fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
        const data = await response.json();
        setURL(data[0]);
        const doge = document.querySelector("#shibu-pic")
        doge.scrollIntoView({behavior:"smooth"});
    }

    return (
        <>
            <div id="refresh">
                <label className="label">Press for another cute Shibu</label>
                <button type="button" onClick={fetchURL}>Refresh</button>
            </div>
            <AnimalPic animalURL = {URL}></AnimalPic>
        </>
    )
}

export default PictureHolder