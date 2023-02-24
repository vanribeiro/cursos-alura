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
        return CreatedAtAction(nameof(ObterSessoesPorId), new { id = sessao.Id }, sessao);
    }

    [HttpGet]
    public IEnumerable<ReadSessaoDTO> ObterSessao()
    {
        return _mapper.Map<List<ReadSessaoDTO>>(_context.Sessoes.ToList());
    }

    [HttpGet("{id}")]
    public IActionResult ObterSessoesPorId(int id)
    {
        var sessao = _context.Sessoes.FirstOrDefault(sessao => sessao.Id == id);
        if (sessao == null) return NotFound();
        var sessaoDTO = _mapper.Map<ReadSessaoDTO>(sessao);
        return Ok(sessaoDTO);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizaSessao(int id, [FromBody] UpdateSessaoDTO sessaoDTO)
    {
        var sessao = _context.Sessoes.FirstOrDefault(sessao => sessao.Id == id);
        if (sessao == null) return NotFound();
        _mapper.Map(sessaoDTO, sessao);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpPatch("{id}")]
    public IActionResult AtualizaSessaoParcial(int id, JsonPatchDocument<UpdateSessaoDTO> patch)
    {
        var sessao = _context.Sessoes.FirstOrDefault(sessao => sessao.Id == id);
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


    [HttpDelete("{id}")]
    public IActionResult DeletaSessao(int id)
    {
        var sessao = _context.Sessoes.FirstOrDefault(sessao => sessao.Id == id);
        if (sessao == null) return NotFound();
        _context.Remove(sessao);
        _context.SaveChanges();
        return NoContent();
    }
}
