import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrimeNG } from 'primeng/config';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
 standalone: true,
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss'],
 imports: [InputTextModule, FloatLabelModule]
})
export class AppComponent implements OnInit {
 title = 'demo';

 public response!: Observable<object>;
 text: any;

 constructor(private http: HttpClient, private primeng: PrimeNG) {}

 ngOnInit(): void {
   this.primeng.ripple.set(true);
   this.response = this.http.get('/api/hello');
 }
}
