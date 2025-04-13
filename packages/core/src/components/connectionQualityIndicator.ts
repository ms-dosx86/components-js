import type { Participant } from '@ms-dosx86/livekit-client';
import { createConnectionQualityObserver } from '../observables/participant';
import { prefixClass } from '../styles-interface';

export function setupConnectionQualityIndicator(participant: Participant) {
  const className = prefixClass('connection-quality');
  const connectionQualityObserver = createConnectionQualityObserver(participant);
  return { className, connectionQualityObserver };
}
