using System;
using System.Globalization;
class Programa {

    static void Main(string[] args){
        CultureInfo culture;
        culture = CultureInfo.CreateSpecificCulture("pt-BR");

        double investimento = 1000;

        investimento = investimento + investimento * 0.05;

        int mes = 1;
        while(mes <= 12){
            investimento = investimento + investimento * 0.05;
            // Console.WriteLine("[" + mes + "] " + investimento.ToString("C", culture));
            mes++;
        }

        int month;
        for(month = 1; month <= 12; month++){
            investimento *= 1.005;
            Console.WriteLine("[" + month + "] " + investimento.ToString("C", culture));
        }

        Console.WriteLine("Tecle enter para fechar...");
        Console.ReadLine();
        
    }
}