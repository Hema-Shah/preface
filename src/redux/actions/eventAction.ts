import {event} from '../services';
import {CONFIG} from '../../config';

export async function currentEvent() {
  return event.get(
    `organizations/${CONFIG.eventbriteUserID}/events?order_by=start_asc&status=live&token=${CONFIG.eventbriteToken}`,
  );
}
