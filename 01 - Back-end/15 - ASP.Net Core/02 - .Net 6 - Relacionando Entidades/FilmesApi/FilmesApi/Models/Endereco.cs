using System.ComponentModel.DataAnnotations;

namespace FilmesApi.Models;

public class Endereco
{
    [Key]
    [Required]
    public int Id { get; set; } = 0;

    public string Logradouro { get; set; } = string.Empty;

    public int Numero { get; set; } = 0;

    public virtual Cinema Cinema { get; set; }
}
