import * as React from 'react';
import { LocalParticipant } from '@ms-dosx86/livekit-client';
import type { Participant, Room } from '@ms-dosx86/livekit-client';
import { encryptionStatusObservable } from '@ms-dosx86/components-core';
import { useEnsureParticipant, useEnsureRoom } from '../context';
import { useObservableState } from './internal';

/**
 * @alpha
 */
export interface UseIsEncryptedOptions {
  room?: Room;
}

/**
 * @alpha
 */
export function useIsEncrypted(participant?: Participant, options: UseIsEncryptedOptions = {}) {
  const p = useEnsureParticipant(participant);

  const room = useEnsureRoom(options.room);

  const observer = React.useMemo(() => encryptionStatusObservable(room, p), [room, p]);
  const isEncrypted = useObservableState(
    observer,
    p.isLocal ? (p as LocalParticipant).isE2EEEnabled : !!p?.isEncrypted,
  );
  return isEncrypted;
}
