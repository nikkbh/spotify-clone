"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}
const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
    return player.setId(data.id);
  };
  return (
    <div
      onClick={handleClick}
      className="
            flex
            items-center
            gap-x-3
            cursor-pointer
            hover:bg-neutral-800
            rounded-md
            w-full
            p-2
        "
    >
      <div
        className="
                relative
                min-w-[48px]
                min-h-[48px]
                overflow-hidden
                rounded-md
            "
      >
        <Image
          alt="Media Item"
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
        />
      </div>
      <div
        className="
        flex
        flex-col
        gap-y-1
        overflow-hidden
      "
      >
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
