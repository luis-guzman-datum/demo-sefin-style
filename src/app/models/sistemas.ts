export interface SistemaModel{
    logo:string;
    nombre:string;
    link:string;
    desciption?:string;
    permiso?:boolean;
}

export const ListaDeSistemasConAcceso:SistemaModel[]=[
    {
        logo:'assets/images/sistemas/sistema.png',
        link:'',
        nombre:'Sistema 1',
        desciption:'',
        permiso:true
    },
    {
        logo:'assets/images/sistemas/sistema.png',
        link:'',
        nombre:'Sistema 2',
        desciption:'',
        permiso:true
    },
    {
        logo:'assets/images/sistemas/sistema.png',
        link:'',
        nombre:'Sistema 3',
        desciption:'',
        permiso:false
    },
    {
        logo:'assets/images/sistemas/sistema.png',
        link:'',
        nombre:'Sistema 4',
        desciption:'',
        permiso:false
    },
    {
        logo:'assets/images/sistemas/sistema.png',
        link:'',
        nombre:'Sistema 5',
        desciption:'',
        permiso:true
    },
    {
        logo:'assets/images/sistemas/sistema.png',
        link:'',
        nombre:'Sistema 6',
        desciption:'',
        permiso:false
    },
    {
        logo:'assets/images/sistemas/sistema.png',
        link:'',
        nombre:'Sistema 7',
        desciption:'',
        permiso:true
    },
    {
        logo:'assets/images/sistemas/sistema.png',
        link:'',
        nombre:'Sistema 8',
        desciption:'',
        permiso:true
    }
]