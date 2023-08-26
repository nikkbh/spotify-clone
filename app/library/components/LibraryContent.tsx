"use client";

import React from "react";

import { Song } from "@/types";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryContentProps {
  songs: Song[];
}

const LibraryContent: React.FC<LibraryContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div
        className="
                flex
                flex-col
                gap-y-2
                w-full
                px-6
                text-neutral-400
            "
      >
        No songs in the library.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((item) => (
        <MediaItem
          key={item.id}
          onClick={(id: string) => onPlay(id)}
          data={item}
        />
      ))}
    </div>
  );
};

export default LibraryContent;
