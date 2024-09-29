import {
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  input,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { toBoolean } from '../util/convert';
import { pgTabSetComponent } from './tabset.component';

@Component({
  selector: 'pg-tab',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles  : [],
  host: {
    '[class.ant-tabs-tabpane]': 'true'
  }
})
export class pgTabComponent implements OnDestroy, OnInit {
  public PgDisabled = input<boolean>(true);

  position: number | null = null;
  origin: number | null = null;

  @Output() pgSelect = new EventEmitter();
  @Output() pgClick = new EventEmitter();
  @Output() pgDeselect = new EventEmitter();
  @ContentChild('TabHeading', { read: true, static: false }) _tabHeading: TemplateRef<void>;
  @ViewChild(TemplateRef, { read: true, static: false }) _content: TemplateRef<void>;

  get content(): TemplateRef<void> | null {
    return this._content;
  }

  constructor(private pgTabSetComponent: pgTabSetComponent) {
  }

  ngOnInit(): void {
    this.pgTabSetComponent._tabs.push(this);
  }

  ngOnDestroy(): void {
    this.pgTabSetComponent._tabs.splice(this.pgTabSetComponent._tabs.indexOf(this), 1);
  }

}
