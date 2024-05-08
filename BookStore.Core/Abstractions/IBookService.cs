﻿using BookStore.Core.Models;

namespace BookStore.Application.Services
{
    public interface IBookService
    {
        Task<Guid> CreatelBook(Book book);
        Task<Guid> DeleteBook(Guid id);
        Task<List<Book>> GetAllBooks();
        Task<Guid> UpdateBook(Guid id, string title, string description, decimal price);
    }
}