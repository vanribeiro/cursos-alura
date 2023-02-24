using System.ComponentModel.DataAnnotations;

namespace FilmesApi.Data.DTOs;

public class CreateSessaoDTO
{
    [Required]
    public int Id { get; set; } = 0;
}
