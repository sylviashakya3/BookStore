using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BookStore.Domain.Models;

namespace BookStore.Domain.Interfaces
{
	public interface ICategoryService: IDisposable
	{
		Task<IEnumerable<Category>> GetAll();
		Task<Category> GetById(int id);
		Task<Category> Add(int id);
		Task<Category> Update(Category category);
		Task<Category> Remove(Category category);
		Task<IEnumerable<Category>> Search(string categoryName);
	}
}
