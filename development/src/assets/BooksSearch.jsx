import {useEffect, useState} from "react";


function BooksSearch () {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchItem, setSearchItem] = useState('')

    useEffect(() => {
        setLoading(true);
        fetch("https://run.mocky.io/v3/99225ede-0231-4a93-9d0c-830cf635d065")
            .then((response) => response.json())
            .then((json) => {
                setBooks(json)
                setFilteredBooks(json)
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = books.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(filteredItems)
    }

    return (
        <div className="App">
            <input
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder='Wyszukaj książkę'
            />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>Books</h1>
                    <table border={1}>
                        <tr>
                            <th>Tytuł</th>
                            <th>ISBN</th>
                            <th>Autor</th>
                            <th>Okładka</th>
                        </tr>
                        {filteredBooks.map((book) => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.isbn}</td>
                                <td>{book.author.fullname}</td>
                                <td><img src={book.cover} alt=""/></td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
        </div>
    );
}

export default BooksSearch;
