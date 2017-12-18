export class Time{
  constructor(nome, escudo){
    this.nome = nome;
    this.escudo = escudo;

    this.pontos = 0;
    this.gm = 0;
    this.gs = 0;
    this.saldo =0;
  }
    updateInfo(pontos, golsMarcados, golsSofridos, saldo){
        this.pontos += pontos;
        this.gm += golsMarcados;
        this.gs += golsSofridos;
        this.saldo += golsMarcados - golsSofridos;
    }
    fimJogo(timeAdversario, gols, golsAdversario){
        if( gols == golsAdversario){
            this.updateInfo(1,gols, golsAdversario);
            timeAdversario.updateInfo(1, golsAdversario, gols);
        }else{
            if(gols > golsAdversario){
                this.updateInfo(3,gols, golsAdversario);
                timeAdversario.updateInfo(0, golsAdversario, gols);
            }else{
                this.updateInfo(0,gols, golsAdversario);
                timeAdversario.updateInfo(3, golsAdversario, gols);
            }
        }
    }
}
