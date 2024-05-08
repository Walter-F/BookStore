namespace BookStore.Contracts
{
    public record BooksResponse (
        Guid id, 
        string Title, 
        string Description,
        decimal Price);
}
