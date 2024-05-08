namespace BookStore.DataAccess.Entities
{
    public class BookEntity
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = String.Empty;
        public string Description { get; set; } = String.Empty;
        public decimal Price { get; set; }
    }
}
