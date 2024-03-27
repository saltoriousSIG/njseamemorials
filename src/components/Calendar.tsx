import { useEffect } from "react";
import "@fullcalendar/react/dist/vdom-test-react18";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { useNavigate } from "react-router";


export const NFCalendar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const element = document.getElementById("calendar");
    const calendar = new Calendar(element as HTMLElement, {
      plugins: [googleCalendarPlugin, dayGridPlugin],
      googleCalendarApiKey: "AIzaSyA4bsYsAgHd9TprAmhOi0tdySV6FfR-vwQ",
      events: {
        googleCalendarId: "6c0cff25d0ecb149ece0c49bdddc02bfa2a772c7f7e590df9aebb2c0302b3327@group.calendar.google.com",
      },
      eventClick: function (event) {
        event.jsEvent.cancelBubble = true;
        event.jsEvent.preventDefault();
        const startTime = new Date(event?.event._instance?.range.start as Date);

        const timeStamp = startTime.getTime();

        const title = event.event._def.title.trim();
        const pageData = {
          title,
          timeStamp,
          source: "calendar",
          id: event.event._def.publicId,
        };

        const pageDataString = JSON.stringify(pageData);
        const encoded = btoa(pageDataString);
        window.scrollTo(0, 0);
        navigate(`/book/${encoded}`);
      },
      eventClassNames: function (args: any) {
        if (
          args.event._def.title === "Unavailable" ||
          args.event._def.title === "Unavailable "
        ) {
          return ["unavailable"];
        }
        if (args.timeText) {
          const timeOfDay = args.timeText.slice(-1);
          if (timeOfDay === "a") {
            return ["morning"];
          } else if (timeOfDay === "p") {
            return ["evening"];
          }
        }
      } as any,
    });

    calendar.render();
    //const events = calendar.getEventSources();
  }, [navigate]);

  return <div id="calendar" className="w-full h-[1000px] container m-auto"></div>
};
