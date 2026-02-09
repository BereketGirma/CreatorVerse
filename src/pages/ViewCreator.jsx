import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

export default function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        alert("Error fetching creator (check console).");
        navigate("/");
      } else {
        setCreator(data);
      }
      setLoading(false);
    };

    fetchCreator();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this creator?")) {
      return;
    }

    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Error deleting creator (check console).");
    } else {
      navigate("/");
    }
  };

  if (loading) {
    return (
      <main className="view-creator-container">
        <p className="loading">Loading...</p>
      </main>
    );
  }

  if (!creator) {
    return (
      <main className="view-creator-container">
        <h1 style={{ color: "#ffffff" }}>Creator Not Found</h1>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </main>
    );
  }

  // Extract social media links from URL
  const youtubeUrl = creator.url?.includes('youtube.com') ? creator.url : null;
  const twitterUrl = creator.url?.includes('twitter.com') ? creator.url : null;

  return (
    <main className="view-creator-container">
      <div className="back-button">
        <Link to="/">
          <button>← Back</button>
        </Link>
      </div>

      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="view-creator-image"
        />
      )}

      <h1 className="view-creator-name">{creator.name}</h1>

      <p className="view-creator-description">
        {creator.description}
      </p>

      <div className="view-creator-links">
        {youtubeUrl && (
          <a href={youtubeUrl} target="_blank" rel="noreferrer">
            YouTube →
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            Twitter →
          </a>
        )}
        {!youtubeUrl && !twitterUrl && creator.url && (
          <a href={creator.url} target="_blank" rel="noreferrer">
            Visit Channel →
          </a>
        )}
      </div>

      <div className="view-creator-actions">
        <Link to={`/edit/${id}`}>
          <button>Edit Creator</button>
        </Link>
        <button onClick={handleDelete} className="delete">
          Delete Creator
        </button>
      </div>
    </main>
  );
}
