import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgIf } from '@angular/common';
import { TokenServiceService } from 'src/app/seguridad/service/token-service.service';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:[RouterModule, CommonModule, NgIf],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems:RouteInfo[]=[];
  public pacientesMenuExpanded = false;
  currentUser: any;

  // this is for the open close
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private tokenService:TokenServiceService
  ) {}

  // End open close
  ngOnInit() {

    // Verifica si el rol 'USER' está presente
    const isUser = this.tokenService.getRol();
    console.log("rol",isUser);
    

    // Si el rol 'USER' está presente, oculta la barra lateral
    if (isUser.includes("USER")) {
      this.sidebarnavItems = [];
    } else {
      // Si no es un usuario 'USER', carga las rutas normalmente
      this.sidebarnavItems = ROUTES;
    } 

    
    
     

  }


  navigateOrToggleSubMenu(sidebarnavItem: RouteInfo) {
    if (sidebarnavItem.submenu.length === 0) {
      // Si no hay submenú, simplemente navega
      this.router.navigate([sidebarnavItem.path]);
    } else {
      // Si hay un submenú, alternar su visibilidad
      if (sidebarnavItem.title === this.showSubMenu) {
        this.showSubMenu = '';
      } else {
        this.showSubMenu = sidebarnavItem.title;
      }
    }
  }
  

}
