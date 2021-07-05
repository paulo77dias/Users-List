
import { UsuariosService } from './usuarios.service';
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { LoadButtonComponent } from '../load button/load-button.component';


interface Food {
    value: string;
    viewValue: string;
  }



@Component({
    templateUrl:'./usuarios.component.html',
    styleUrls:['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit,OnChanges{


    hasMore = true
    searchtypes:any
    searchFilter = 'Name'
    condition:boolean=true
    start = 10
    value:string='';
    searchText='';
    filter :string= '';
    userFilter:any=[];
    usuarioPhoto:string='';

    //usuarios filtardos pela pesquisa
    usuariosShow:any ;

    //todos os usuarios recebidos da api
    allUsuarios:any;


    // Informações mais detalhadas de um usuario
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
    



    
    constructor(private userService:UsuariosService, private bottomloadMore:LoadButtonComponent ){}

   
    


    ngOnChanges(changes: SimpleChanges): void {
       console.log(changes.hasMore)
       
    }






    changeCity(e:any) {
        this.searchFilter = e.target.value
    }



   



    ngOnInit() {

       this.userService.buscarUsuarios().subscribe(
           resposta => {
           this.allUsuarios = resposta.results;
          
           for (var pos in this.allUsuarios) {
            //Recebe o atributo date
            var data = this.allUsuarios[pos].dob.date;
            //pega os 10 primeiros caracteres do atributo date
            this.allUsuarios[pos].dob.date = data.substr(0, 10);
           }
           this.usuariosShow = this.allUsuarios
        }
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

       
        
        this.usuariosShow = []

        switch (this.searchFilter) {
            case 'Name':
                for (var pos in this.allUsuarios) {
                    var nome = this.allUsuarios[pos].name.first + this.allUsuarios[pos].name.last
                    
                    if(nome.toUpperCase().includes(this.searchText.toUpperCase())){
                     
                        this.usuariosShow = this.usuariosShow.concat(this.allUsuarios[pos])
                    }
                 
                
                   }
                break;

            case 'Country':
                for (var pos in this.allUsuarios) {
                    var nome = this.allUsuarios[pos].location.country + this.allUsuarios[pos].location.country
                    
                    if(nome.toUpperCase().includes(this.searchText.toUpperCase())){
                     
                        this.usuariosShow = this.usuariosShow.concat(this.allUsuarios[pos])
                    }
                }
                break;

            case 'Birth':
                for (var pos in this.allUsuarios) {
                    var nome = this.allUsuarios[pos].dob.date + this.allUsuarios[pos].dob.date
                    
                    if(nome.includes(this.searchText)){
                     
                        this.usuariosShow = this.usuariosShow.concat(this.allUsuarios[pos])
                    }
                }
                break;
        }
             
      if (this.usuariosShow.length > 10) {
          this.hasMore = true
          
      }
           
            
         
              
               
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
        console.log(this.usuariosShow)
    console.log(this.start)
      if (this.usuariosShow.length < 10 || this.start >= this.usuariosShow.length) {
          this.hasMore = false
          
      }

    }


 
}