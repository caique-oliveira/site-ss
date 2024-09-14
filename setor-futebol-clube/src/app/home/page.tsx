import Partida from "../components/partida/partida";
import Carousel from "../components/carousel/carousel";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import Institucional from "../components/Institucional/Institucional"
import CalendarWithEvents from "../components/Calendar/CalendarWithEvents";
import Parceiros from "../components/parceiros/parceiros"

export default function Home() {
    return (
        <>
            <Partida />
            <Carousel />
            <NewsFeed />
            <CalendarWithEvents />
            <Institucional />
            <Parceiros />
        </>
    );
  }
  