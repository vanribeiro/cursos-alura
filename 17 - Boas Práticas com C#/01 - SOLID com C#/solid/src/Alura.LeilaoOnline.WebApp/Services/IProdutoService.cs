using System.Collections.Generic;
using Alura.LeilaoOnline.WebApp.Models;

namespace Alura.LeilaoOnline.WebApp.Services
{
    public interface IProdutoService
    {
        IEnumerable<Leilao> PesquisaLeiloesEmPregaoPorTermo(string termo);

        IEnumerable<CategoriaComInfoLeilao> ConsultaCategoriaComTotalDeLeiloesEmPregao();

        Categoria ConsultaCategoriaPorIdComLeiloesEmPregao(int id);
    }
}
