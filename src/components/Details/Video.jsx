import React from "react";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { Button } from "react-bootstrap";

const Video = ({ id, movieOrTv }) => {
  const endpoint =
    movieOrTv === "movie" ? `/movie/${id}/videos?` : `/tv/${id}/videos?`;

  const { data } = useFetchDetails(endpoint, "videos", id);

  return (
    <div className="d-flex justify-content-center">
      {data && data.results[0] ? (
        <Button variant="danger" size="lg" className="mb-2">
          <a
            href={
              data.results[0].site === "YouTube"
                ? `https://www.youtube.com/watch?v=${data.results[0].key}`
                : `https://vimeo.com/${data.results[0].key}`
            }
            rel="noreferrer noopener"
            target="_blank"
            className="text-white"
          >
            Watch {data.results[0].type}
          </a>
        </Button>
      ) : null}
    </div>
  );
};

export default Video;
