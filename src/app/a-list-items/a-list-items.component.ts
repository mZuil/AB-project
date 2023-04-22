import { Component, OnInit } from '@angular/core';
import  { Headphone } from '../interfaces/headphone';

@Component({
  selector: 'app-a-list-items',
  templateUrl: './a-list-items.component.html',
  styleUrls: ['./a-list-items.component.css']
})
export class AListItemsComponent implements OnInit {

  headphonesList: Headphone[] = [];

  constructor() { 

    this.headphonesList = [{id: 1, name: "ELECDER i45 On-Ear", price: 14.99, times_sold: 1269, show_sold_number: false, image_path: "assets/images/ELECDER.png"},
    {id: 2, name: "Sony WH-1000XM4", price: 348, times_sold: 5037, show_sold_number: false, image_path: "assets/images/SonyWH1000XM4.png"},
    {id: 3, name: "Apple EarPods", price: 16.99, times_sold: 31367, show_sold_number: false, image_path: "assets/images/AppleEarPods.png"},
    {id: 4, name: "Tuitager Bluetooth", price: 24.99, times_sold: 31, show_sold_number: false, image_path: "assets/images/TuitagerBluetooth.png"},
    {id: 5, name: "V8 Wireless", price: 26.99, times_sold: 787, show_sold_number: false, image_path: "assets/images/V8Wireless.png"},
    {id: 6, name: "RORSOU R10", price: 16.99, times_sold: 205, show_sold_number: false, image_path: "assets/images/RORSOUR10.png"},
    {id: 7, name: "DIUARA Wireless Earbuds", price: 22.99, times_sold: 1261, show_sold_number: false, image_path: "assets/images/DIUARAWirelessEarbuds.png"},
    {id: 8, name: "INFURTURE", price: 49.99, times_sold: 9734, show_sold_number: false, image_path: "assets/images/INFURTURE.png"},
    {id: 9, name: "NIVAVA Kids", price: 7.64, times_sold: 4315, show_sold_number: false, image_path: "assets/images/NIVAVAKids.png"},
    {id: 10, name: "Picun B12", price: 19.99, times_sold: 3742, show_sold_number: false, image_path: "assets/images/PicunB12.png"},
    {id: 11, name: "Sony ZX", price: 20.05, times_sold: 20739, show_sold_number: false, image_path: "assets/images/SonyZX.png"},
    {id: 12, name: "OneOdio Wired", price: 31.99, times_sold: 8412, show_sold_number: false, image_path: "assets/images/OneOdioWired.png"}  ]
  }

  ngOnInit(): void {
  }

}
