export class Reservacion  {

  constructor(

    public id: string,
    public restauranteId: string,
    public restaurante: string,
    public horario: string,
    public imgUrl: string,
    public usuarioId: string

  ){}

}
