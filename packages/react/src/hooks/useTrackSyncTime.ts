import * as React from 'react';
import {
  type TrackReferenceOrPlaceholder,
  trackSyncTimeObserver,
} from '@ms-dosx86/components-core';
import { useObservableState } from './internal';

/**
 * @internal
 */
export function useTrackSyncTime(ref: TrackReferenceOrPlaceholder | undefined) {
  const observable = React.useMemo(
    () => (ref?.publication?.track ? trackSyncTimeObserver(ref?.publication.track) : undefined),
    [ref?.publication?.track],
  );
  return useObservableState(observable, {
    timestamp: Date.now(),
    rtpTimestamp: ref?.publication?.track?.rtpTimestamp,
  });
}
