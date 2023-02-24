using System.ComponentModel.DataAnnotations;

namespace FilmesApi.Data.DTOs;

public class UpdateSessaoDTO
{
    [Required]
    public int Id { get; set; } = 0;
}
