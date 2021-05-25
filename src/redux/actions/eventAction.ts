import {event} from '../services';
import {CONFIG} from '../../config';

export async function currentEvent() {
  return event.get(
    `organizations/${CONFIG.eventbriteUserID}/events?order_by=start_asc&show_series_parent=True&status=live&expand=organizer,venue&token=${CONFIG.eventbriteToken}`,
  );
}

export async function structuredContent(event_ID: string) {
  return event.get(
    `events/${event_ID}/structured_content/?token=${CONFIG.eventbriteToken}`,
  );
}
