import { AfterViewInit, Component, OnInit } from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';
import { ThemeOption } from 'ngx-echarts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit, AfterViewInit {

  //configuracion de grafico

  options:any = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };

  //configuracion de grafico 2

  options2: any;
  updateOptions: any;

  private oneDay:any = 24 * 3600 * 1000;
  private now!: Date;
  private value!: number ;
  private data!: any[];
  private timer: any;

  chartInstance: any;
  theme!:  string;
  options3 = {
    title: {
      text: 'Nightingale\'s Rose Diagram',
      subtext: 'Mocking Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }
    ]
  }

  chartLine:any = {
    title: {
      text: 'Titulo'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };


  //configuracion de grafico de World Population

  populateChart:any = {
    title: {
      text: 'World Population'
    },
    color: ['#3398DB','#052c69' ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '2012',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ]
  };

  //configuracion de grafico precipitacionChart

  precipitacionChart:any = {
    color: ['#3398DB','#052c69' ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#052c69'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature']
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Precipitation',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: 'Temperature',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: [
      {
        name: 'Evaporation',
        type: 'bar',
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
        ]
      },
      {
        name: 'Precipitation',
        type: 'bar',
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };



  //grafico de tipo radio
  chartRadius:any = {

    color: ['#3398DB','#052c69' , '#8d7435', '#545454', "#dcd2a3"],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };


  constructor() {}

  ngOnInit(){ this.data = [];

    //consfigura data
    this.now = new Date(1997, 9, 3);
    this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }

    // inicia configuracion de grafico online:
    this.options2 = {
      title: {
        text: 'Dynamic Data + Time Axis'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params:any) => {
          params = params[0];
          const date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: 'Mocking Data',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data
      }]
    };

    // Data dinamica
    this.timer = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }

      // actualizacion de series de data
      this.updateOptions = {
        series: [{
          data: this.data
        }]
      };
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData() {
    this.now = new Date(this.now.getTime() + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value)
      ]
    };
  }


  ngAfterViewInit() {
    setTimeout(() => {
      let chartElement1: any = document.getElementById('chart1');
      let chartElement2: any = document.getElementById('chart2');
      let chart1: any = getInstanceByDom(chartElement1);
      const chart2: any = getInstanceByDom(chartElement2);
      connect([chart1, chart2]);
    });
  }
}

export const CoolTheme = {
  color: [
    '#b21ab4',
    '#6f0099',
    '#2a2073',
    '#0b5ea8',
    '#17aecc',
    '#b3b3ff',
    '#eb99ff',
    '#fae6ff',
    '#e6f2ff',
    '#eeeeee'
  ],

  title: {
    textStyle: {
      fontWeight: 'normal',
      color: '#00aecd'
    }
  },

  visualMap: {
    color: ['#00aecd', '#a2d4e6']
  },

  toolbox: {
    color: ['#00aecd', '#00aecd', '#00aecd', '#00aecd']
  },

  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    axisPointer: {
      // Axis indicator, coordinate trigger effective
      type: 'line', // The default is a straight line： 'line' | 'shadow'
      lineStyle: {
        // Straight line indicator style settings
        color: '#00aecd',
        type: 'dashed'
      },
      crossStyle: {
        color: '#00aecd'
      },
      shadowStyle: {
        // Shadow indicator style settings
        color: 'rgba(200,200,200,0.3)'
      }
    }
  },

  // Area scaling controller
  dataZoom: {
    dataBackgroundColor: '#eee', // Data background color
    fillerColor: 'rgba(144,197,237,0.2)', // Fill the color
    handleColor: '#00aecd' // Handle color
  },

  timeline: {
    lineStyle: {
      color: '#00aecd'
    },
    controlStyle: {
      color: '#00aecd',
      borderColor: '00aecd'
    }
  },

  candlestick: {
    itemStyle: {
      color: '#00aecd',
      color0: '#a2d4e6'
    },
    lineStyle: {
      width: 1,
      color: '#00aecd',
      color0: '#a2d4e6'
    },
    areaStyle: {
      color: '#b21ab4',
      color0: '#0b5ea8'
    }
  },

  chord: {
    padding: 4,
    itemStyle: {
      color: '#b21ab4',
      borderWidth: 1,
      borderColor: 'rgba(128, 128, 128, 0.5)'
    },
    lineStyle: {
      color: 'rgba(128, 128, 128, 0.5)'
    },
    areaStyle: {
      color: '#0b5ea8'
    }
  },

  graph: {
    itemStyle: {
      color: '#b21ab4'
    },
    linkStyle: {
      color: '#2a2073'
    }
  },

  map: {
    itemStyle: {
      color: '#c12e34'
    },
    areaStyle: {
      color: '#ddd'
    },
    label: {
      color: '#c12e34'
    }
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#dddddd'],
          [0.8, '#00aecd'],
          [1, '#f5ccff']
        ],
        width: 8
      }
    }
  }
};