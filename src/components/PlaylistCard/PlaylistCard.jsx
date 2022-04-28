import React from "react";
import "./PlaylistCard.css";
import { Link } from "react-router-dom";
import { useAuth , usePlaylist , removePlaylistHandler} from "../../context/index";

function PlaylistCard({ playlist, playlistId, videoId }) {
  const {
    state: { token },
  } = useAuth();
  const { dispatch } = usePlaylist();

  return (
    <>
      <div className="card">
        <div className="card-wrapper">
          <Link to={`/playlist/${playlistId}`}>
            <div className="card-img">
              {playlist?.videos.length === 0 ? (
                <img
                  src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`}
                  alt="mobile"
                />
              ) : (
                <img
                  src={`https://i.ytimg.com/vi/${playlist?.videos[0]._id}/hq720.jpg`}
                  alt="mobile"
                />
              )}
            </div>
          </Link>
        </div>
        <footer className="card-footer">
          <div className="card-footer-wrapper">
            <p className="footer-views">{playlist.title}</p>
            <p className="footer-views">•</p>
            <p className="footer-views">{playlist.videos.length} videos</p>
          </div>
          <i
            className="material-icons-outlined icon delete-icon"
            onClick={() => removePlaylistHandler(playlistId, token, dispatch)}
          >
            delete
          </i>
        </footer>
      </div>
    </>
  );
}

export { PlaylistCard };
