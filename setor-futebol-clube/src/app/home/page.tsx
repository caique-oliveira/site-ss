import Carousel from "../Components/Carousel/Carousel";
import NewsFeed from "../Components/NewsFeed/NewsFeed";
import Institucional from "../Components/Institucional/Institucional"
import TitleCalendar from "../Components/TitleCalendar";
import CalendarWithEvents from "../Components/Calendar/CalendarWithEvents";
import ClassificationTable from "../Components/ClassificationTable/ClassificationTable";
import Partners from "../Components/Partners/Partners"

const Home = async () => {
      
    return (
        <>
            <Carousel />
            <Institucional />
            <NewsFeed />
            <TitleCalendar />
            <CalendarWithEvents />
            <ClassificationTable />
            <Partners />
        </>
    );
  }

export default Home;