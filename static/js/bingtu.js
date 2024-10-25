var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

var data = [
  {
    name: "Cinematography",
    itemStyle: {
      color: "#357f7f", // 更深的绿色
    },
    children: [
      {
        name: "Shot Size\nPerception",
        value: 1.3, 
        originalValue: 205, 
        itemStyle: {
          color: "#7fb3b3", // 浅绿色
        },
      },
      {
        name: "Camera\nAngle\nPerception",
        value: 1.3,
        originalValue: 202,
        itemStyle: {
          color: "#9ac7c7", // 更浅的绿色
        },
      },
      {
        name: "Camera\nMovement\nPerception",
        value: 1.3,
        originalValue: 219,
        itemStyle: {
          color: "#9ac7c7", // 更浅的绿色
        },
      }
    ],
  },
  {
    name: "Narrative",
    itemStyle: {
      color: "#b36a2d", // 更深的橙色
    },
    children: [
      {
        name: "Script\nMatching",
        value: 1.3,
        originalValue: 235,
        itemStyle: {
          color: "#e8a876", // 浅橙色
        },
      },
      {
        name: "Plot\nOrdering",
        value: 1.3,
        originalValue: 240,
        itemStyle: {
          color: "#f0c0a0", // 更浅的橙色
        },
      }
    ],
  },
  {
    name: "Scene",
    itemStyle: {
      color: "#7d3b8e", // 更深的紫色
    },
    children: [
      {
        name: "Background\nPerception",
        value: 1,
        originalValue: 65,
        itemStyle: {
          color: "#c79ac7", // 更浅的紫色
        },
      },
      {
        name: "Scene\nCounting",
        value: 1.3,
        originalValue: 209,
        itemStyle: {
          color: "#d3b0d3", // 更浅的紫色
        },
      },
      {
        name: "Lighting\nPerception",
        value: 1,
        originalValue: 31,
        itemStyle: {
          color: "#d3b0d3", // 更浅的紫色
        },
      }
    ],
  },
  {
    name: "Character",
    itemStyle: {
      color: "#3a6cae", // 更深的蓝色
    },
    children: [
      {
        name: "Character\nCounting",
        value: 1,
        originalValue: 71,
        itemStyle: {
          color: "#83b3d9", // 浅蓝色
        },
      },
      {
        name: "Action\nPerception",
        value: 1,
        originalValue: 30,
        itemStyle: {
          color: "#a3cde7", // 更浅的蓝色
        },
      },
      {
        name: "Costume,\nMakeup,\nand Props",
        value: 1,
        originalValue: 30,
        itemStyle: {
          color: "#83b3d9", // 浅蓝色
        },
      },
      {
        name: "Emotion\nPerception",
        value: 1,
        originalValue: 49,
        itemStyle: {
          color: "#a3cde7", // 更浅的蓝色
        },
      }
    ],
  },
  {
    name: "Making",
    itemStyle: {
      color: "#d45a5a", // 红色保持不变
    },
    children: [
      {
        name: "Cut\nCounting",
        value: 1,
        originalValue: 29,
        itemStyle: {
          color: "#f1a6a6", // 浅红色
        },
      },
      {
        name: "Special\nEffects\nPerception",
        value: 1,
        originalValue: 54,
        itemStyle: {
          color: "#f4b5b5", // 更浅的红色
        },
      },
      {
        name: "Art Style\nPerception",
        value: 1,
        originalValue: 38,
        itemStyle: {
          color: "#f4b5b5", // 更浅的红色
        },
      }
    ],
  },
];

option = {
  series: {
    type: "sunburst",
    data: data,
    radius: [0, "95%"],
    sort: null,
    emphasis: {
      focus: "ancestor",
    },
    startAngle: 180, 
    label: {
      textStyle: {
        fontSize: 14,
        fontFamily: "Times New Roman",
      },
      formatter: function (params) {
        if (params.data.originalValue !== undefined) {
          return `${params.name}\n{small|${"("+params.data.originalValue+")"}}`;
        } else {
          var totalValue = 0;
          if (params.data.children) {
            params.data.children.forEach(function (child) {
              if (child.originalValue !== undefined) {
                totalValue += child.originalValue;
              }
            });
          }
          return `${params.name}\n{small|${"("+totalValue+")"}}`;
        }
      },
      rich: {
        small: {
          fontSize: 12,
          fontFamily: "Bold",
          lineHeight: 15,
        },
      },
    },
    levels: [
      {},
      {
        r0: "16%",  
        r: "40%",   
        itemStyle: {
          borderRadius: 6,
          borderWidth: 4,
        },
        label: {
          rotate: "tangential",
          align: "center",        
          position: "inside",     
        },
      },
      {
        r0: "40%",  
        r: "75%",   
        itemStyle: {
          borderRadius: 6,
          borderWidth: 4,
        },
        label: {
          align: "center",        
          position: "inside",     
        },
      },
      {
        r0: "75%",  
        r: "95%",   
        label: {
          position: "outside",    
          padding: 3,
          silent: false,
        },
        itemStyle: {
          borderColor: "transparent",
          borderWidth: 0,
        },
      },
    ],
  },
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);


