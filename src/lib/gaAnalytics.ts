import { getAnalytics, logEvent } from 'firebase/analytics';
import { firebaseApp } from './firebaseApp';

const analytics = getAnalytics(firebaseApp);

export const trackGaEvent = (type: GaEventType, body: Record<string, any>) => {
  logEvent(analytics, type, body);
};

export enum GaEventType {
  'login_page_visited' = 'login_page_visited',
}
