using AutoMapper;
using FilmesApi.Data.DTOs;
using FilmesApi.Data;
using FilmesApi.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace FilmesApi.Controllers;

[ApiController]
[Route("[controller]")]
public class SessaoController: ControllerBase
{
    private readonly FilmeContext _context;
    private readonly IMapper _mapper;

    public SessaoController(FilmeContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    /// <summary>
    /// Adiciona um Sessao ao banco de dados
    /// </summary>
    /// <param name="filmeDto">Objeto com os campos necessários para criação de um Sessao</param>
    /// <returns>IActionResult</returns>
    /// <response code="201">Caso inserção seja feita com sucesso</response>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public IActionResult AdicionarSessao([FromBody] CreateSessaoDTO sessaoDTO)
    {
        Sessao sessao = _mapper.Map<Sessao>(sessaoDTO);
        _context.Sessoes.Add(sessao);
        _context.SaveChanges();
        return CreatedAtAction(nameof(ObterSessoesPorId), new { filmeId = sessao.FilmeId, cinemaId = sessao.CinemaId }, sessao);
    }

    [HttpGet]
    public IEnumerable<ReadSessaoDTO> ObterSessao()
    {
        return _mapper.Map<List<ReadSessaoDTO>>(_context.Sessoes.ToList());
    }

    [HttpGet("{filmeId}/{cinemaId}")]
    public IActionResult ObterSessoesPorId(int filmeId, int cinemaId)
    {
        var sessao = _context.Sessoes.FirstOrDefault(sessao => sessao.FilmeId == filmeId && sessao.CinemaId == cinemaId);
        if (sessao == null) return NotFound();
        var sessaoDTO = _mapper.Map<ReadSessaoDTO>(sessao);
        return Ok(sessaoDTO);
    }

    [HttpPut("{filmeId}/{cinemaId}")]
    public IActionResult AtualizaSessao(int filmeId, int cinemaId, [FromBody] UpdateSessaoDTO sessaoDTO)
    {
        var sessao = _context.Sessoes.FirstOrDefault(sessao => sessao.FilmeId == filmeId && sessao.CinemaId == cinemaId);
        if (sessao == null) return NotFound();
        _mapper.Map(sessaoDTO, sessao);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpPatch("{filmeId}/{cinemaId}")]
    public IActionResult AtualizaSessaoParcial(int filmeId, int cinemaId, JsonPatchDocument<UpdateSessaoDTO> patch)
    {
        var sessao = _context.Sessoes.FirstOrDefault(sessao => sessao.FilmeId == filmeId && sessao.CinemaId == cinemaId);
        if (sessao == null) return NotFound();
        var sessaoParaAtualizar = _mapper.Map<UpdateSessaoDTO>(sessao);
        patch.ApplyTo(sessaoParaAtualizar, ModelState);
        if (!TryValidateModel(sessaoParaAtualizar))
        {
            return ValidationProblem(ModelState);
        }
        _mapper.Map(sessaoParaAtualizar, sessao);
        _context.SaveChanges();
        return NoContent();
    }


    [HttpDelete("{filmeId}/{cinemaId}")]
    public IActionResult DeletaSessao(int filmeId, int cinemaId)
    {
        var sessao = _context.Sessoes.FirstOrDefault(sessao => sessao.FilmeId == filmeId && sessao.CinemaId == cinemaId);
        if (sessao == null) return NotFound();
        _context.Remove(sessao);
        _context.SaveChanges();
        return NoContent();
    }
}
