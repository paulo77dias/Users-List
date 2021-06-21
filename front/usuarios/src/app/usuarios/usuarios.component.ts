
import { UsuariosService } from './usuarios.service';
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";


interface Food {
    value: string;
    viewValue: string;
  }



@Component({
    templateUrl:'./usuarios.component.html',
    styleUrls:['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit,OnChanges{


    
    searchtypes:any
    searchFilter = 'Name'
    condition:boolean=true
    start = 10
    value:string='';
    searchText='';
    filter :string= '';
    userFilter:any=[];
    usuarioPhoto:string='';
    usuariostest:any ;
    usuarios:any;



    usuarioDetalhe:any={
        name:{first:"",last:""},
        email:"",
        gender:"",
        dob:{date:""},
         location:{country:"",
                  street:{number:"",name:""},
                  state:""
        },
        id:{value:""}
    }
    



    
    constructor(private userService:UsuariosService ){}

   
    


    ngOnChanges(changes: SimpleChanges): void {
       
       
    }






    changeCity(e:any) {
        this.searchFilter = e.target.value
    }



   



    ngOnInit() {

       this.userService.buscarUsuarios().subscribe(
           resposta => {
           this.usuarios = resposta.results;
           this.usuariostest = this.usuarios
           for (var pos in this.usuarios) {
            //Recebe o atributo date
            var data = this.usuarios[pos].dob.date;
            //pega os 10 primeiros caracteres do atributo date
            this.usuarios[pos].dob.date = data.substr(0, 10);
           }}
         ,
         error=>{console.log(error)}
       );


        this.searchtypes = [
            { tipo: 'Name'},
            { tipo: 'Birth'},
            { tipo: 'Country'}
        ];
     
    }





   

    

   
    
    onSearchChange(): void {  
       
        console.log(this.searchFilter)
        this.usuariostest = []

        switch (this.searchFilter) {
            case 'Name':
                for (var pos in this.usuarios) {
                    var nome = this.usuarios[pos].name.first + this.usuarios[pos].name.last
                    
                    if(nome.toUpperCase().includes(this.searchText.toUpperCase())){
                     
                        this.usuariostest = this.usuariostest.concat(this.usuarios[pos])
                    }
                 
                
                   }
                break;

            case 'Country':
                for (var pos in this.usuarios) {
                    var nome = this.usuarios[pos].location.country + this.usuarios[pos].location.country
                    
                    if(nome.toUpperCase().includes(this.searchText.toUpperCase())){
                     
                        this.usuariostest = this.usuariostest.concat(this.usuarios[pos])
                    }
                }
                break;

            case 'Birth':
                for (var pos in this.usuarios) {
                    var nome = this.usuarios[pos].dob.date + this.usuarios[pos].dob.date
                    
                    if(nome.includes(this.searchText)){
                     
                        this.usuariostest = this.usuariostest.concat(this.usuarios[pos])
                    }
                }
                break;
        }
          
           
            
         
              
               console.log(this.usuariostest)
            }  
        
    
      
   

    detalheUsuario(usuario:any){
        this.usuarioDetalhe = usuario
        this.usuarioPhoto = usuario.picture.large
        console.log(this.usuarioDetalhe);
        
        (document.querySelector('#popup') as HTMLElement).style.display = "block";
        (document.querySelector('#tabela') as HTMLElement).style.opacity = "0.2";
        
        
    }
    

    fecharDetalhes(){
        (document.querySelector('#popup') as HTMLElement).style.display = "none";
        (document.querySelector('#tabela') as HTMLElement).style.opacity = "1.0";
    }

    
    loadMore(){
        this.userService.buscarUsuarios().subscribe(
            resposta => {
                
                this.usuarios = this.usuarios.concat(resposta.results) 
        }
             
         ,
            error=>{console.log(error)}
        )
    }


 
}