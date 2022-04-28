import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Nav, Playlistmodal, Sidebar } from "../../components";
import { useVideo , useAuth , useLike , removeFromLiked ,   useWatchlater, removeFromWatchLater, addToWatchLater,} from "../../context/index";
import "./VideoDetails.css";

function VideoDetails() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { videoId } = useParams();
  const { videos } = useVideo();
  const {
    state: { token },
  } = useAuth();
  const { likeVideo, setLikeVideo } = useLike();
  const { watchlaterVideos, setWatchlaterVideos } = useWatchlater();
  const currentVideoPlaying = videos.find((item) => item._id === videoId);

  const addToLiked = async (video) => {
    try {
      const resp = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: { authorization: token },
        }
      );
      console.log(resp);
      setLikeVideo(resp.data.likes);
    } catch (err) {
      console.log(err);
    }
  };

  const saveToPlaylistHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="container-video">
      <Nav />
      <Sidebar />
      <div className="video-player">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2 className="current-playing">{currentVideoPlaying?.title}</h2>
        <div className="current-playing-detail-container">
          <div className="current-playing-detail-left-container">
            <p className="current-playing-views">
              {currentVideoPlaying?.views}
            </p>
            <p className="current-playing-views">•</p>
            <p className="current-playing-uploaded">
              {currentVideoPlaying?.uploaded}
            </p>
          </div>
          <div className="current-playing-detail-right-container">
            {likeVideo.find((item) => item._id === videoId) ? (
              <button
                className="btn flex  detail-btn"
                onClick={() => removeFromLiked(token, setLikeVideo, videoId)}
              >
                <span className="material-icons icon">thumb_up_alt</span>Liked
              </button>
            ) : (
              <button
                className="btn flex  detail-btn"
                onClick={() => addToLiked(currentVideoPlaying)}
              >
                <span className="material-icons-outlined icon">thumb_up</span>
                Like
              </button>
            )}

            {watchlaterVideos.find((item) => item._id === videoId) ? (
              <button
                className="btn flex detail-btn"
                onClick={() =>
                  removeFromWatchLater(
                    token,
                    setWatchlaterVideos,
                    videoId,
                    navigate
                  )
                }
              >
                <span className="material-icons icon">watch_later</span>Remove
                from Watch later
              </button>
            ) : (
              <button
                className="btn flex detail-btn"
                onClick={() =>
                  addToWatchLater(
                    currentVideoPlaying,
                    token,
                    setWatchlaterVideos,
                    navigate
                  )
                }
              >
                <span className="material-icons-outlined icon">
                  watch_later
                </span>
                Watch later
              </button>
            )}

            <button
              className="btn flex detail-btn"
              onClick={saveToPlaylistHandler}
            >
              <span className="material-icons-outlined icon">playlist_add</span>
              Save to playlist
            </button>

            {show && (
              <Playlistmodal
                closeCB={() => setShow(false)}
                video={currentVideoPlaying}
                videoId={currentVideoPlaying._id}
              />
            )}
          </div>
        </div>
        <h4 className="current-playing">{currentVideoPlaying?.creator}</h4>
      </div>
    </div>
  );
}

export { VideoDetails };
