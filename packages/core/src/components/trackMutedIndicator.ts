// @ts-ignore some module resolutions (other than 'node') choke on this
import type { Styles } from '@ms-dosx86/components-styles/dist/types_unprefixed/index.scss';
import { Track } from '@ms-dosx86/livekit-client';
import { mutedObserver } from '../observables/participant';
import { prefixClass } from '../styles-interface';
import type { TrackReferenceOrPlaceholder } from '../track-reference';

export function setupTrackMutedIndicator(trackRef: TrackReferenceOrPlaceholder) {
  let classForSource: keyof Styles = 'track-muted-indicator-camera';
  switch (trackRef.source) {
    case Track.Source.Camera:
      classForSource = 'track-muted-indicator-camera';
      break;
    case Track.Source.Microphone:
      classForSource = 'track-muted-indicator-microphone';
      break;

    default:
      break;
  }
  const className: string = prefixClass(classForSource);
  const mediaMutedObserver = mutedObserver(trackRef);

  return { className, mediaMutedObserver };
}
