import classNames from "classnames";

import { IMAGES } from "assets/images/custom";

import SONGS from "app/constants/music";

import { Divider } from "@cianciarusocataldo/modular-ui";
import { Widget } from "app/types";

const SongsList = ({ compact }: Widget) => (
  <div
    className={classNames("p-1 flex flex-col", {
      "h-60 overflow-auto": compact,
    })}
  >
    {SONGS.map((song) => (
      <div className="flex flex-col ml-2" key={song.title}>
        <div className="flex flex-row mt-1 pb-2">
          {IMAGES.ICONS.SONG}
          <div className="flex flex-col ml-2">
            <a className="my-auto text-xl" href={song.link}>
              {song.title}
            </a>
            <a className="my-auto" href={song.link}>
              <p className="text-gray-600 text-lg">{song.artist}</p>
            </a>
          </div>
        </div>
        <Divider />
      </div>
    ))}
  </div>
);

export default SongsList;
