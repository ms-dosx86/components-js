import type { Room } from '@ms-dosx86/livekit-client';
import { prefixClass } from '../styles-interface';

export function setupDisconnectButton(room: Room) {
  const disconnect = (stopTracks?: boolean) => {
    room.disconnect(stopTracks);
  };
  const className: string = prefixClass('disconnect-button');
  return { className, disconnect };
}
