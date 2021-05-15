import moment from 'moment';

export const mapTime = (time: moment.MomentInput) => {
  return `${moment(time).format('ddd').toUpperCase()}, ${moment(time)
    .format('MMM DD')
    .toUpperCase()}  |  ${moment(time).format('LT')}`;
};

export const mapStartEndTime = (
  start: moment.MomentInput,
  end: moment.MomentInput,
) => {
  return `${moment(start).format('ddd').toUpperCase()}, ${moment(start).format(
    'hh:mm',
  )}-${moment(end).format('hh:mm')} HKT`;
};

export const renderHTMLContent = (eventId: string) => {
  return `<html>
  <head>
     <meta name="viewport" content="width=device-width, user-scalable=no">
  </head>
  <body>
     <button id="eventbrite-widget-modal-trigger-${eventId}" type="button">Buy Tickets</button>
     <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
     <script type="text/javascript">
        var exampleCallback = function() {
          console.log("Order complete!");
        };
        
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: ${eventId},
          modal: true,
          modalTriggerElementId: "eventbrite-widget-modal-trigger-${eventId}",
          onOrderComplete: exampleCallback
        });
     </script>
  </body>
</html>`;
};
