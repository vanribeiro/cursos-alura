interface ICard {
	id: number;
	imagem_capa: string;
	titulo: string;
	resumo: string;
	compartilhamentos: number;
	linhas_de_codigo: number;
	comentarios: number;
    usuario: {
        imagem: string;
        nome: string;
    };
}


export type { ICard };