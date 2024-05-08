using System.ComponentModel.DataAnnotations;

namespace BookStore.Core.Models
{
    public class Book
    {
        public const int MAX_TITLE_LENGTH = 250;

        private Book(Guid id, string title, string description, decimal price)
        {
            Id = id;
            Title = title;
            Description = description;
            Price = price;
        }

        public Guid Id { get; }
        public string Title { get; } = String.Empty;
        public string Description { get; } = String.Empty;
        public decimal Price { get; }  

        // Удобное создание модели безопасным образом.
        public static (Book book, string error) Create(Guid id, string title, string description, decimal price) 
        {
            var error = String.Empty;

            if(String.IsNullOrEmpty(title) || title.Length > MAX_TITLE_LENGTH)
            {
                error = "Title can not be empty or longer than 250 symbols";
                return (null, error);
            }

            var book = new Book(id, title, description, price);
            return (book, error);
        }
    }
}
