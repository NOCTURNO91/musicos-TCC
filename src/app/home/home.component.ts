import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  //atributos/variables
  nombre:string="domos";
  edad:number=28;


  numeros:any []=[1,2,3,4,5,6,7,8,9,10];
  integrantes:any[]=["https://firebasestorage.googleapis.com/v0/b/soledmemortiz.appspot.com/o/WhatsApp%20Image%202022-09-16%20at%2012.12.47%20AM%20(1).jpeg?alt=media&token=f6c7abcf-6180-4dcf-8dc6-ab374340b7bb","https://firebasestorage.googleapis.com/v0/b/soledmemortiz.appspot.com/o/WhatsApp%20Image%202022-09-16%20at%2012.14.57%20AM%20(2).jpeg?alt=media&token=3515f28d-83a6-4319-a7b4-5e747098a0f8"]

  personajes:Personaje[]=[
    {"nombre":"Domos Aidaous",
    "edad":28,
    "foto":"https://firebasestorage.googleapis.com/v0/b/soledmemortiz.appspot.com/o/WhatsApp%20Image%202022-09-16%20at%2012.14.56%20AM.jpeg?alt=media&token=b361d4b2-d2c2-46f9-835d-bb5b40192930"},

    {"nombre":"GoreRoman",
    "edad":25,
    "foto":"https://firebasestorage.googleapis.com/v0/b/soledmemortiz.appspot.com/o/WhatsApp%20Image%202022-09-16%20at%2012.12.47%20AM%20(1).jpeg?alt=media&token=f6c7abcf-6180-4dcf-8dc6-ab374340b7bb"},

    {"nombre":"Cadaver",
    "edad":35,
    "foto":"https://firebasestorage.googleapis.com/v0/b/soledmemortiz.appspot.com/o/WhatsApp%20Image%202022-09-16%20at%2012.14.57%20AM%20(3).jpeg?alt=media&token=ccc24758-361d-420e-8f21-e0901499f2af"},

    {"nombre":"Maldito",
    "edad":28,
    "foto":"https://firebasestorage.googleapis.com/v0/b/soledmemortiz.appspot.com/o/WhatsApp%20Image%202022-09-16%20at%2012.14.57%20AM%20(2).jpeg?alt=media&token=3515f28d-83a6-4319-a7b4-5e747098a0f8"}

  ]
  

  constructor() { }

}
