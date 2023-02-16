using Microsoft.AspNetCore.Http;

namespace livros{
    public interface IRelatorio{
        public Task Imprimir(HttpContext context);
    }
}