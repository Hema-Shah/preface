import {event} from '../services';

export async function currentEvent(CONFIG: any) {
  return event.get(
    `${CONFIG.EVENTBRITE_HOST}organizations/${CONFIG.EVENTBRITE_USERID}/events?order_by=start_asc&show_series_parent=True&status=live&expand=organizer,venue&token=${CONFIG.EVENTBRITE_TOKEN}`,
  );
}

export async function structuredContent(event_ID: string,CONFIG: any) {
  return event.get(
    `${CONFIG.EVENTBRITE_HOST}events/${event_ID}/structured_content/?token=${CONFIG.EVENTBRITE_TOKEN}`,
  );
}

export async function ticketEvent(email: string) {
  return event.get(
    `organizations/${CONFIG.eventbriteUserID}/orders?expand=event,event.venue&only_emails=${email}&token=${CONFIG.eventbriteToken}`,
  );
}
