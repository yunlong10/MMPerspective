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
      color: "#84c3b7",
    },
    children: [
      {
        name: "Shot Size\nPerception",
        value: 1, // 修改为相同的值
        originalValue: 205, // 保留原始值
        itemStyle: {
          color: "#ebf1b7",
        },
      },
      {
        name: "Camera\nAngle\nPerception",
        value: 1,
        originalValue: 202,
        itemStyle: {
          color: "#e2ebcf",
        },
      },
      {
        name: "Camera\nMovement\nPerception",
        value: 1,
        originalValue: 219,
        itemStyle: {
          color: "#e2ebcf",
        },
      }
    ],
  },
  {
    name: "Narrative",
    itemStyle: {
      color: "#f2b56f",
    },
    children: [
      {
        name: "Script\nMatching",
        value: 1,
        originalValue: 235,
        itemStyle: {
          color: "#ffcea2",
        },
      },
      {
        name: "Plot\nOrdering",
        value: 1,
        originalValue: 240,
        itemStyle: {
          color: "#faeed3",
        },
      }
    ],
  },
  {
    name: "Scene",
    itemStyle: {
      color: "#f2b56f",
    },
    children: [
      {
        name: "Background\nPerception",
        value: 1,
        originalValue: 65,
        itemStyle: {
          color: "#e9eee0",
        },
      },
      {
        name: "Scene\nCounting",
        value: 1,
        originalValue: 209,
        itemStyle: {
          color: "#fedec0",
        },
      },
      {
        name: "Lighting\nPerception",
        value: 1,
        originalValue: 31,
        itemStyle: {
          color: "#e9eee0",
        },
      }
    ],
  },
  {
    name: "Character",
    itemStyle: {
      color: "#8fbcd4",
    },
    children: [
      {
        name: "Character\nCounting",
        value: 1,
        originalValue: 71,
        itemStyle: {
          color: "#fedec0",
        },
      },
      {
        name: "Action\nPerception",
        value: 1,
        originalValue: 30,
        itemStyle: {
          color: "#fedec0",
        },
      },
      {
        name: "Costume,\nMakeup,\nand Props",
        value: 1,
        originalValue: 30,
        itemStyle: {
          color: "#d6e4bb",
        },
      },
      {
        name: "Emotion\nPerception",
        value: 1,
        originalValue: 49,
        itemStyle: {
          color: "#d6e4bb",
        },
      }
    ],
  },
  {
    name: "Making",
    itemStyle: {
      color: "#8fbcd4",
    },
    children: [
      {
        name: "Cut\nCounting",
        value: 1,
        originalValue: 29,
        itemStyle: {
          color: "#fedec0",
        },
      },
      {
        name: "Special\nEffects\nPerception",
        value: 1,
        originalValue: 54,
        itemStyle: {
          color: "#c8d6cf",
        },
      },
      {
        name: "Art Style\nPerception",
        value: 1,
        originalValue: 38,
        itemStyle: {
          color: "#8fbcd4",
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
    startAngle: 180, // 调整开始角度
    label: {
      textStyle: {
        fontSize: 15,
        fontFamily: "Times New Roman",
      },
      formatter: function (params) {
        // 如果是子节点，直接显示 originalValue
        if (params.data.originalValue !== undefined) {
          return `${params.name}\n{small|${"("+params.data.originalValue+")"}}`;
        } else {
          // 如果是父节点，计算所有子节点的 originalValue 之和
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
          fontSize: 15,
          fontFamily: "Bold",
          lineHeight: 15,
        },
      },
    },
    levels: [
      {},
      {
        r0: "16%",  // 第一层半径
        r: "40%",   // 第一层到第二层的半径
        itemStyle: {
          borderRadius: 6,
          borderWidth: 4,
        },
        label: {
          rotate: "tangential",  // 标签沿着圆周旋转
          align: "center",        // 标签居中
          position: "inside",     // 标签显示在节点内部
        },
      },
      {
        r0: "40%",  // 第二层半径
        r: "75%",   // 第二层到第三层的半径
        itemStyle: {
          borderRadius: 6,
          borderWidth: 4,
        },
        label: {
          align: "center",        // 标签居中
          position: "inside",     // 标签显示在节点内部
        },
      },
      {
        r0: "75%",  // 第三层半径
        r: "95%",   // 到最外层的半径
        label: {
          position: "outside",    // 外层标签显示在节点外部
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
