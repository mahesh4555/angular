import { Component, OnInit, OnDestroy,OnChanges, DoCheck, AfterViewInit, AfterViewChecked , Input,
  ComponentFactoryResolver, ViewChild, ViewRef} from '@angular/core';
// import {Service2Service} from './service.service'
  import {HiComponent} from '../hi/hi.component'
  import {HelloComponent} from '../hello/hello.component'


import {HostDirective} from '../host.directive'
import {Service1Service} from '../service1.service'
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit, OnDestroy, OnChanges, DoCheck,AfterViewInit, AfterViewChecked {


  @Input() show : boolean;
  @Input() depParent : boolean;
  // public show : boolean ;
   public showchild : boolean ;

  public depchild : string = "CHILD";
  
   @ViewChild(HostDirective,{static:true})
   childRef : HostDirective


      components = [HiComponent, HelloComponent]

      public data1 : number;

  constructor(public factoryRes : ComponentFactoryResolver, private serv1 : Service1Service) { 
    this.getData()

    const test$ = new Observable(subscriber =>{
      console.log('test')
      subscriber.next('1')
      subscriber.next('2')
      subscriber.next('1')
      subscriber.next('1')
    })

    test$.subscribe(x=>{
      console.log("var:",x)
    },
    error =>{console.log(error)},
    completed => {console.log("completed")}
    )
  }


   

  getData(){
    console.log("getData in hello world")
    console.log("ZZZZZZZZZZZ:", this.serv1.getDS1(5))

    // this.data1 = this.serv1.getDS1()

  }




  loadComponent(id){
    this.childRef.viewRef.clear();
    const resolvedFactory = this.factoryRes.resolveComponentFactory(this.components[id]);
   this.childRef.viewRef.createComponent(resolvedFactory)    


  }
 
 
  ngOnChanges(){  // executes before ngonInit if input received
    console.log("COmp changes")
    this.showchild = this.show
  }

  ngOnInit(): void {

    console.log("COmp initialized")
    this.showchild =   this.show // no need of the statemet, it is executed in ngOnChanges already
  }

  
  ngOnDestroy(){
    console.log("COmp destoyed")
  }

ngDoCheck(){
  console.log("Comp DoCheck")
}


ngAfterViewInit(){
  console.log("Comp AfterViewInit")
}

ngAfterViewChecked(){
  console.log("Comp AfterViewChecked")

}
  changeShow(){
    this.showchild =  !this.showchild 
  }


}
