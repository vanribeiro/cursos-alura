using System.Collections.Generic;
using Alura.LeilaoOnline.WebApp.Models;

namespace Alura.LeilaoOnline.WebApp.Dados.EfCore
{
    public interface ICategoriaDao
    {
        public IEnumerable<Categoria> BuscarCategorias();

        public Categoria BuscarCategoriaPorId(int id);
    }
}
