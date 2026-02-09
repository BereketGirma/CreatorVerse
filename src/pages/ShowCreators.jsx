import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error(error);
        alert("Error fetching creators (check console).");
      } else {
        setCreators(data || []);
      }

      setLoading(false);
    };

    fetchCreators();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>CREATORVERSE</h1>
          <div className="hero-buttons">
            <Link to="/">
              <button>VIEW ALL CREATORS</button>
            </Link>
            <Link to="/new">
              <button>ADD A CREATOR</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="main-content">
        {loading && <p className="loading">Loading...</p>}
        {!loading && creators.length === 0 && <p className="empty-state">No creators yet.</p>}

        {!loading && creators.length > 0 && (
          <section className="creators-grid">
            {creators.map((c) => (
              <CreatorCard key={c.id} creator={c} />
            ))}
          </section>
        )}
      </div>
    </>
  );

}
