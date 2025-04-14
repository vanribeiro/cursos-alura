using System.Linq;
using System.Collections.Generic;
using Alura.LeilaoOnline.WebApp.Models;


namespace Alura.LeilaoOnline.WebApp.Dados.EfCore
{
    public class CategoriaDaoComEFCore : ICategoriaDao
    {
        readonly AppDbContext _context;

        public CategoriaDaoComEFCore()
        {
            _context = new AppDbContext();
        }

        public IEnumerable<Categoria> BuscarTodos()
        {
            return _context.Categorias.ToList();
        }

        public Categoria BuscarPorId(int id)
        {
            return _context.Categorias.First(categoria => categoria.Id == id);
        }
    }

}
