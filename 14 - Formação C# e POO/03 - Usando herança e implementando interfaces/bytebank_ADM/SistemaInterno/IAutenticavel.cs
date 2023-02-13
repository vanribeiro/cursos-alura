namespace bytebank_ADM.SistemaIterno{
    public interface IAutenticavel {
        public string Senha { get; set; }
        public abstract bool Autenticar(string senha);
    }
}