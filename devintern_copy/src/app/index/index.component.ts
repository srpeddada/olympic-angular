import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import {Chart} from "chart.js";
import { NgForm, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor( public service: ServiceService) { }
  file: File = null;
  array;
  data
  id;
  getgraph = false
   gradientChartOptionsConfigurationWithTooltipRed;
  gradientBarChartConfiguration;
  fileName
  upload = false


  public count = 0;
  public count2 = 0;
  customers
  public canvas: any;
  public ctx;
  public datasets: any;
  public myChartData;

  public myChart;



  public clicked: boolean = false;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  public clicked3: boolean = false;
  public clicked4: boolean = false;
 public clicked5: boolean = false;


  public star1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public star2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public star3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public star4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public star5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
csvData

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  

  ngOnInit(): void {

       var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#2380f7",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#2380f7",
            },
          },
        ],
      },
    };

    var gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#9a9a9a",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a",
            },
          },
        ],
      },
    };

    this.gradientChartOptionsConfigurationWithTooltipRed = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9a9a9a",
            },
            stepSize: 0.5,
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(233,32,16,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a",
            },
          },
        ],
      },
    };

    var gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 110,
              padding: 20,
              fontColor: "#ff8a76",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(220,53,69,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#ff8a76",
            },
          },
        ],
      },
    };

    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,242,195,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    };

    this.gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],

        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    };

    var chart_labels = [
      "NA",
      "NA",
      "NA",
     "NA",
     "NA",
    "NA",
     "NA",
     "NA",
     "NA",
     "NA",
     "NA",
     "NA",
    ];
    this.datasets = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    // this.data = this.datasets[0];
    //this.data = this.star1;
    //this.cdr.detectChanges();
    var chart = "chartBig1";
    this.canvas = document.getElementById(chart);
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
    gradientStroke.addColorStop(0, "rgba(233,32,16,0)"); //red colors

    var config = {
      type: "line",

      // scales: {
      //   yAxes: [
      //     {
      //       stepSize: 0.2,
      //     },
      //   ],
      // },

      data: {
        labels: chart_labels,

        datasets: [
          {
            label: "data",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#ec250d",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#ec250d",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#ec250d",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.data,
          },
        ],
      },
      options: this.gradientChartOptionsConfigurationWithTooltipRed,
    };
    this.myChartData = new Chart(this.ctx, config);

  }

  onChange(event) {
    console.log(event)
    this.file = event.target.files[0];
    
    this.fileName = event.target.files[0].name
    this.upload = true
    var text;
    const reader = new FileReader();

     var data = {

      }
    reader.onload = function (e) {
       text = e.target.result;
      console.log(text)


      const headers = text.slice(0, text.indexOf("\n") - 1).split(",");
      
      for (let i = 0; i < headers.length; i++){
        var str = ""
        if (headers[i].split(" ").length > 1) {
          headers[i] = headers[i].split(" ").join("")
        }
        headers[i] = headers[i].replace(/[^a-zA-Z0-9 ]/g, '')

      }
      const rows = text.slice(text.indexOf("\n") + 1).split("\n");
     
      var array = []
      rows.forEach(element => {
        var split_element = element.split(",")
        var temp =[]
        if (split_element.length != headers.length) {
           console.log(split_element)
          var temp_num = ""
          var flag = false 
          split_element.forEach(e => {
            if (e[0] == '"') {
              temp_num = temp_num + e.split('"')[1]
              flag = true
              // console.log(temp_num, "first split")
            }
            else if (e[e.length - 1] == '"') {
              temp_num = temp_num + e.split('"')[0]
              flag = false
              //  console.log(temp_num, "second split")
            }
            else if (flag == true) {
              temp_num = temp_num + e.split('"')[0]
               console.log(temp_num)
            }
            if(flag == false){
              if (temp_num == "") {
                temp.push(e)
              }
              else {
                temp.push(temp_num)
                temp_num = ""
              }
            }
          });
          console.log(temp, "done")
          split_element = temp
        }
        array.push(split_element)
      });
      console.log(array)

      var i = 0;
      headers.forEach(element => {
        var temp =[]
        array.forEach(ele => {
          if (i != 0) 
            temp.push(parseFloat(ele[i]))
          else
             temp.push(ele[i])
        })
        data[element] = temp
        i++;
      });
      console.log(data)
    }
    reader.readAsText(this.file); 
    this.data = data
  }
    
  onUpload() {
    this.service.postdata(this.data).subscribe(res => {
      console.log(res)
      var obj = JSON.parse(res.toString())
      this.id = obj.id
      console.log(this.id)
      this.getgraph = true
      this.upload = false
    })
  }

  getData() {


          this.count = this.count + 1;
      if (this.count > 1) {
        this.myChartData.destroy();
        this.myChart.destroy();
      }
    this.clicked = true;
    this.clicked1 = false;
    this.clicked2 = false;
    this.clicked3 = false;
    this.clicked4 = false;
      this.clicked5 = false;
    var data = {
      id: this.id
    }
    this.service.getdata(data).subscribe(res => {
      console.log(res, "data")
      var obj = JSON.parse(res.toString())
      console.log(obj[0])
      this.getgraph = false
this.csvData = obj[0]
       var chart_labels = obj[0].date
        this.datasets = [
          //[120, 50, 50, 50, 50, 50, 5, 50, 50, 90, 12, 30],
          obj[0].open,
          obj[0].high,
          obj[0].low,
          obj[0].close,
          obj[0].adj_close,
          obj[0].volume
        ];
        this.data = this.datasets[0];
        // this.myChartData.update();
        //this.data = this.star1;
        //this.cdr.detectChanges();
        var chart = "chartBig1";
        this.canvas = document.getElementById(chart);
        this.ctx = this.canvas.getContext("2d");

        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
        gradientStroke.addColorStop(0, "rgba(233,32,16,0)"); //red colors

        var config = {
          type: "line",

          // scales: {
          //   yAxes: [
          //     {
          //       stepSize: 0.2,
          //     },
          //   ],
          // },

          data: {
            labels: chart_labels,

            datasets: [
              {
                label: "Reviews",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#ec250d",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#ec250d",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#ec250d",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: this.data,
              },
            ],
          },
          options: this.gradientChartOptionsConfigurationWithTooltipRed,
        };
      this.myChartData = new Chart(this.ctx, config);
      
    })
  }

  datepicker() {
    console.log(this.range.value)
    var start = this.range.value.start
    var end = this.range.value.end
    // if (start != null && end != null) {
    //   console.log(start.toString().split(" "))
    //   start = start[2]+"-"+
    // }
    console.log(Date.parse('10-Aug-22') == Date.parse(start))
    var startInd, endInd
    var startFlag = false
    var endFlag = false
    console.log(this.csvData.date.length)
    for (let i = 0; i < this.csvData.date.length; i++){
      console.log(this.csvData.date[i])
      if (Date.parse(this.csvData.date[i]) == Date.parse(end)) {
        if (endFlag == false) {
          endInd = i
          endFlag = true
        }
      }
      else if (Date.parse(this.csvData.date[i]) < Date.parse(end)) {
        if (endFlag == false) {
          endInd = i - 1
           endFlag = true
        }
      }

       if (Date.parse(this.csvData.date[i]) == Date.parse(start)) {
         if (startFlag == false) {
           startInd = i
           startFlag = true
         }
      }
      else if (Date.parse(this.csvData.date[i]) < Date.parse(start)) {
         if (startFlag == false) {
           startInd = i 
          startFlag = true
         }
       }
      
      if (startFlag == true && endFlag == true) {
        break;
      }
    }

    console.log(startInd, endInd)


       this.count2 = this.count2 + 1;
      if (this.count2 > 1) {
        this.myChartData.destroy();
        this.myChart.destroy();
      }
    this.clicked = true;
    this.clicked1 = false;
    this.clicked2 = false;
    this.clicked3 = false;
    this.clicked4 = false;
      this.clicked5 = false;

    console.log(this.csvData.date[startInd], this.csvData.date[endInd])
       var chart_labels = this.csvData.date.slice(endInd, endInd+1)
        this.datasets = [
          //[120, 50, 50, 50, 50, 50, 5, 50, 50, 90, 12, 30],
          this.csvData.open.slice(endInd, endInd+1),
          this.csvData.high.slice(endInd, endInd+1),
         this.csvData.low.slice(endInd, endInd+1),
         this.csvData.close.slice(endInd, endInd+1),
         this.csvData.adj_close.slice(endInd, endInd+1),
          this.csvData.volume.slice(endInd, endInd+1)
        ];
        this.data = this.datasets[0];
        // this.myChartData.update();
        //this.data = this.star1;
        //this.cdr.detectChanges();
        var chart = "chartBig1";
        this.canvas = document.getElementById(chart);
        this.ctx = this.canvas.getContext("2d");

        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
        gradientStroke.addColorStop(0, "rgba(233,32,16,0)"); //red colors

        var config = {
          type: "line",

          // scales: {
          //   yAxes: [
          //     {
          //       stepSize: 0.2,
          //     },
          //   ],
          // },

          data: {
            labels: chart_labels,

            datasets: [
              {
                label: "Reviews",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#ec250d",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#ec250d",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#ec250d",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: this.data,
              },
            ],
          },
          options: this.gradientChartOptionsConfigurationWithTooltipRed,
        };
      this.myChartData = new Chart(this.ctx, config);
      
  }


    public updateOptions() {
    console.log(this.data);
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }


}


