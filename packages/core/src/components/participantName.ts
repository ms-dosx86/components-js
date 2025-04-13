import type { Participant } from '@ms-dosx86/livekit-client';
import { participantInfoObserver } from '../observables/participant';

export function setupParticipantName(participant: Participant) {
  const infoObserver = participantInfoObserver(participant);
  return { className: 'lk-participant-name', infoObserver };
}
