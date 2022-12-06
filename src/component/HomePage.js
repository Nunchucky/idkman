import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/HomePage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Tile } from "./Tile.js";
import logo from '../images/spotify_logo_white.png'

const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/";

export const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const songs = await axios.get(
        `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/1/playlists`
      );
      setData(songs.data);
    })();
  }, []);
  return (
    <>
        <div className={styles.Container}>
            <div className={styles.column}>
                    <img src={logo} className={styles.logo} />
            </div>
            <div className={styles.top}>
                <div className={styles.TopPlaylistsCont}>
                {data.map((playlist, index) => (
                    <Tile key={index}></Tile>
                ))}
                </div>
            </div>
            <div className={styles.column}></div>
        </div>
        <div className={styles.bottom}></div>
    </>
  );
};
