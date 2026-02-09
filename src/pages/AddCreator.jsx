import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";

export default function AddCreator() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that at least one social media link is provided
    if (!youtube && !twitter) {
      alert("Please provide at least one social media link (YouTube or Twitter).");
      return;
    }

    // Build URL - use YouTube if available, otherwise Twitter
    const url = youtube 
      ? `https://youtube.com/@${youtube}`
      : `https://twitter.com/${twitter}`;

    const { error } = await supabase.from("creators").insert([
      { 
        name, 
        url, 
        description, 
        imageURL: imageURL || null,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Insert failed (check console).");
      return;
    }

    navigate("/");
  };

  return (
    <main className="form-container">
      <div className="back-button">
        <Link to="/">
          <button>← Back</button>
        </Link>
      </div>

      <h1 style={{ marginTop: 0, marginBottom: "2rem", color: "#ffffff" }}>Add Creator</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-section">
          <label htmlFor="image">Image</label>
          <p className="instruction">
            Provide a link to an image of your creator. Be sure to include the http://
          </p>
          <input
            id="image"
            type="url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-section">
          <label htmlFor="description">Description</label>
          <p className="instruction">
            Provide a description of the creator. Who are they? What makes them interesting?
          </p>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
          />
        </div>

        <div className="form-section social-section">
          <h2>SOCIAL MEDIA LINKS</h2>
          <p className="instruction">
            Provide at least one of the creator's social media links.
          </p>

          <div className="social-field">
            <label htmlFor="youtube">
              <svg className="social-icon" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </label>
            <p className="instruction">
              The creator's YouTube handle (without the @)
            </p>
            <input
              id="youtube"
              type="text"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              placeholder="handle"
            />
          </div>

          <div className="social-field">
            <label htmlFor="twitter">
              <svg className="social-icon" viewBox="0 0 24 24" fill="#1DA1F2">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </label>
            <p className="instruction">
              The creator's Twitter handle (without the @)
            </p>
            <input
              id="twitter"
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="handle"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit">Submit</button>
          <Link to="/">
            <button type="button" className="secondary">Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
