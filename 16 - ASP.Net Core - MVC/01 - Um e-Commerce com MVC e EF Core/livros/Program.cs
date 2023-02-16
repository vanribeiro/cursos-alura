using livros;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// ICatalogo catalogo = new Catalogo();
ICatalogo catalogo = new Catalogo();
IRelatorio relatorio = new Relatorio(catalogo);

app.MapGet("/", async (context) => await relatorio.Imprimir(context));

app.Run();
