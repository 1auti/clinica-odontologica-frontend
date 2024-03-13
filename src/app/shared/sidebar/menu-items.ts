import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/pacientes',
    title: 'Pacientes',
    icon: 'bi bi-file-earmark-person-fill',
    class: '',
    extralink: false,
    submenu: [
     
      {
        path: '/component/pacientes/altas-pacientes',
        title: 'Altas de Pacientes',
        icon: 'bi bi-person-add', 
        class: '',
        extralink: false,
        submenu:[]
      },
      {
        path: '/component/pacientes/mostrar-pacientes',
        title: 'Mostrar Pacientes',
        icon: 'bi bi-people-fill', 
        class: '',
        extralink: false,
        submenu:[]
      },
     
    ]
  },
  {
    path: '/component/odontologos',
    title: 'Odontologos',
    icon: 'bi bi-clipboard2-pulse-fill',
    class: '',
    extralink: false,
    submenu: [
      {
          path:'/component/odontologos/alta-odontologos',
          title:'Alta Odontologos',
          icon:'bi bi-person-add',
          class:'',
          extralink:false,
          submenu:[]
      },
      {
          path:'/component/odontologos/mostrar-odontologos',
          title:'Mostrar Odontologos',
          icon: 'bi bi-people-fill',
          class:'',
          extralink: false,
          submenu:[]      
        }
    ]
  },
  {
    path: '/component/usuarios',
    title: 'Usuarios',
    icon: 'bi bi-person-circle',
    class: '',
    extralink: false,
    submenu: []
  },
  
];
