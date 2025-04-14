using Microsoft.AspNetCore.Mvc;
using Alura.LeilaoOnline.WebApp.Services;
using Microsoft.AspNetCore.Routing;

namespace Alura.LeilaoOnline.WebApp.Controllers
{
    public class HomeController : Controller
    {
        readonly IProdutoService _service;

        public HomeController(IProdutoService service)
        {
            _service = service;
        }

        public IActionResult Index()
        {
            var todasAsCategorias = _service.ConsultaCategoriaComTotalDeLeiloesEmPregao();
            return View(todasAsCategorias);
        }

        [Route("[controller]/StatusCode/{statusCode}")]
        public IActionResult StatusCodeError(int statusCode)
        {
            if (statusCode == 404) return View("404");
            return View(statusCode);
        }

        [Route("[controller]/Categoria/{categoria}")]
        public IActionResult Categoria(int id)
        {
            var todasAsCategorias = _service.ConsultaCategoriaPorIdComLeiloesEmPregao(id);
            return View(todasAsCategorias);
        }

        [HttpPost]
        [Route("[controller]/Busca")]
        public IActionResult Busca(string termo)
        {
            ViewData["termo"] = termo;
            var leiloes = _service.PesquisaLeiloesEmPregaoPorTermo(termo);
            return View(leiloes);
        }
    }
}
