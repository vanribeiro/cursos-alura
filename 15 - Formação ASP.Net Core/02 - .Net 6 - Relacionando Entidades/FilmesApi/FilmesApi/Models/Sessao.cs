using System.ComponentModel.DataAnnotations;

namespace FilmesApi.Models;

public class Sessao
{
    [Required]
    public int Id { get; set; } = 0;

    [Required]
    public int FilmeId { get; set; } = 0;

    public virtual Filme Filme { get; set; }

}
