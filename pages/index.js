import Layout from "@/components/Layout.js";
import EventItem from "@/components/EventItem.js";
import { API_URL } from "@/config/index.js";

export default function HomePage({ events }) {
   // console.log(events);

   return (
      <Layout>
         <h1>Upcoming Events</h1>

         {events.length === 0 && <h3>No events to show</h3>}

         {events.map((evt) => {
            <EventItem key={evt.id} evt={evt} />;
         })}
      </Layout>
   );
}

export async function getStaticProps() {
   const res = await fetch(`${API_URL}/api/events`);
   const events = await res.json();

   // console.log(events);

   return {
      props: { events },
      revalidate: 1,
   };
}
