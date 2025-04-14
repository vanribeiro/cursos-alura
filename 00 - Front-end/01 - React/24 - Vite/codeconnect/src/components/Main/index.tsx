import ListCards from '../ListCards';
import Filter from '../Filter';
import SearchBar from '../SearchBar';
import Sorting from '../Sorting';

function Main() {
    return(
        <main>
            <SearchBar />
            <Filter />
            <Sorting />
            <ListCards />
        </main>
    );
}

export default Main;