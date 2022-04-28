import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth, useHistory } from "../../context/index";
import { Modal , Playlistmodal } from "../index";
import "./VideoCard.css";

function VideoCard({ video, videoId }) {
  const [showModal, setShowModal] = useState({
    modal: false,
    playlistModal: false,
  });
  const { setHistoryVideos } = useHistory();
  const {
    state: { token },
  } = useAuth();

  const addToHistory = async (video) => {
    try {
      const resp = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: { authorization: token },
        }
      );
      setHistoryVideos(resp.data.history);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-wrapper">
          <Link to={`/video/${videoId}`}>
            <div className="card-img" onClick={() => addToHistory(video)}>
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`}
                alt="mobile"
              />
            </div>
          </Link>
          <div className="card-heading-wrapper">
            <h2 className="card-main-heading">{video.title}</h2>
            <h3 className="card-sub-heading gray-text">{video.creator}</h3>
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-wrapper">
            <p className="footer-views">{video.views}</p>
            <p className="footer-views">•</p>
            <p className="footer-uploaded">{video.uploaded}</p>
          </div>
          <i
            className="material-icons-outlined kebab-menu"
            onClick={() =>
              setShowModal((modalState) => ({
                ...modalState,
                modal: !modalState.modal,
              }))
            }
          >
            more_vert
          </i>
          {showModal.modal && (
            <Modal
              video={video}
              videoId={videoId}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          )}
          {showModal.playlistModal && (
            <Playlistmodal
              video={video}
              videoId={videoId}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </footer>
      </div>
    </>
  );
}

export { VideoCard };
