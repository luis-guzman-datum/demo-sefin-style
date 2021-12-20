import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    $('.tabs').tabs();
  }

  content: string = `
  <a class="waves-effect waves-light btn blue ml-2">button</a> &nbsp;
  <a class="waves-effect waves-light btn blue ml-2"><i class="material-icons left">cloud</i>button</a> &nbsp;
  <a class="waves-effect waves-light btn blue ml-2"><i class="material-icons right">cloud</i>button</a>
  `;

  content2: string = `
  <div class="fixed-action-btn direction-top active" style="bottom: 45px; right: 24px;">
    <a  class="btn-floating btn-large green pulse btn-flat"><i class="material-icons">chat</i></a>
  </div>
  `;

content3: string = `
  <a class="waves-effect waves-light btn-small blue">Button</a> &nbsp;
  <a class="waves-effect waves-light btn-small blue"><i class="material-icons left">cloud</i>button</a> &nbsp;
  <a class="waves-effect waves-light btn-small blue"><i class="material-icons right">cloud</i>button</a> &nbsp;
`;


content4: string = `
  <a class="btn-large disabled">Button</a> &nbsp;
  <a class="btn disabled">Button</a>  &nbsp;
  <a class="btn-flat disabled">Button</a>  &nbsp;
  <a class="btn-floating disabled"><i class="material-icons">add</i></a>
`;
}