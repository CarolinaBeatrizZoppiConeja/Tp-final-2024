import { Component, EventEmitter, getNgModuleById, inject, Output } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { ThisReceiver } from '@angular/compiler';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
 
  @Output()
  emitirreceta:EventEmitter<Recipe>=new EventEmitter();
  /*recipe:Recipe={
    id:0,
    category:'',
    name:'',
    time:'',
    ingredients:[],
    prep:[],
    img:'',
 }*/
 
  fb=inject(FormBuilder)

  
  
recetasdecocina=this.fb.nonNullable.group(
    {
      id:[0,[Validators.required]],
      category:['',[Validators.required,Validators.minLength(2)]],
      name:['',[Validators.required,Validators.minLength(2)]],
      time:['',[Validators.required,Validators.minLength(2)]],
      ingredients:['',[Validators.required,Validators.minLength(2)]],//¿que pasa si es un vector?
      prep:['',[Validators.required,Validators.minLength(2)]],
      img:['',[Validators.required,Validators.minLength(4)]],
    }
  )
  addrecipes(){
    if(this.recetasdecocina.invalid) return;
    const receta=this.recetasdecocina.getRawValue()
   this.emitirreceta.emit(receta);
    alert('receta guardada');
  }
  
 var containgredientes=0;
 agregaringrediente(containgredientes){  
       var ingr=getNgModuleById("in");
      this.recetasdecocina.controls['ingredients'].value[containgredientes]=ingr;
      alert('ingrediente guardado');
    containgredientes++;
 }
  

 var contasentencias=0; 
  agregarmododepreparacion(contasentencias){
      var pr=getNgModuleById("p");
    this.recetasdecocina.controls['prep'].value[contasentencias]=pr;
     alert('sentencia guardada');
     contasentencias++;
   }

}
