import { observer } from "mobx-react-lite";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { ChosenCard } from "./Components/ChosenCard";
import { myStore } from "./store/Store";

export const App = observer(() => {
	const myBook = myStore.books.find((book) => book.id === myStore.idBook);
	return (
		<div className="App max-w-7xl my-0 mx-auto">
			<Header />
			{myStore.idBook.length > 0 ? (
				<ChosenCard
					categories={myBook?.volumeInfo.categories}
					authors={myBook?.volumeInfo.authors}
					link={myBook?.volumeInfo.imageLinks}
					title={myBook?.volumeInfo.title}
					subtitle={myBook?.volumeInfo.subtitle}
				/>
			) : (
				<Main />
			)}
		</div>
	);
});