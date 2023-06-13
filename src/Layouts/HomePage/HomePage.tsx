import { Carousel } from "./Components/Carousel";
import { ExploreTopArts } from "./Components/ExploreTopArts";
import { Heros } from "./Components/Heros";
import { ArtServices } from "./Components/ArtServices";

export const HomePage = () => {
    return (
        <>
            <ExploreTopArts/>
            <Carousel/>
            <Heros/>
            <ArtServices/>
        </>
    );
}