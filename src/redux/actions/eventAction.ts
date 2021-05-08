import {event} from '../services';
import {CONFIG} from '../../config'

export async function currentEvent() {
  return event.get(`organizations/${CONFIG.user_id}/events?order_by=start_asc&status=live&token=${CONFIG.token}`);
}
