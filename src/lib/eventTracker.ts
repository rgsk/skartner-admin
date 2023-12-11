import { GaEventType, trackGaEvent } from './gaAnalytics';

const eventTracker = {
  loginPageVisited: () => {
    trackGaEvent(GaEventType.login_page_visited, { name: 'mehak' });
  },
};

export default eventTracker;
