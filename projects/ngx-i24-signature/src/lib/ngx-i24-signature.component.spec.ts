import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxI24SignatureComponent } from './ngx-i24-signature.component';

describe('NgxI24SignatureComponent', () => {
  let component: NgxI24SignatureComponent;
  let fixture: ComponentFixture<NgxI24SignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxI24SignatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxI24SignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
