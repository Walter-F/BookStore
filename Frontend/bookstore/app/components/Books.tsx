import Card  from "antd/es/card/Card"
import { CardTitle } from "./Cardtitle"
import Button from "antd/es/button/button";

interface Props {
    books: Book[]
    handleOpen: (book: Book) => void;
    handleDelete: (id: string) => void;
}

export const Books = ({ books, handleDelete, handleOpen }: Props) => {
    return (
        <div className="cards">
            {books.map((book: Book) => (
                <Card 
                    key={book.id} 
                    title={<CardTitle title={book.title} price={book.price} />} 
                    bordered={false} 
                >
                    <p>{book.description}</p>
                    <div className="card-buttons">
                        <Button onClick={() => handleOpen(book)} style = {{flex: 1}}>Редактировать</Button>
                        <Button onClick={() => handleDelete(book.id)} danger style = {{flex: 1}}>Удалить</Button>
                    </div>

                </Card>
            ))}
        </div>
    );
};