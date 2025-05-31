// 中国地图数据 - 本地版本
// 简化的中国省份地图数据，避免依赖外部CDN
const CHINA_MAP_DATA = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "北京市" },
      "geometry": { "type": "Polygon", "coordinates": [[[116.4, 39.9], [116.5, 40.1], [116.3, 40.1], [116.4, 39.9]]] }
    },
    {
      "type": "Feature", 
      "properties": { "name": "上海市" },
      "geometry": { "type": "Polygon", "coordinates": [[[121.4, 31.2], [121.5, 31.4], [121.3, 31.4], [121.4, 31.2]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "天津市" },
      "geometry": { "type": "Polygon", "coordinates": [[[117.2, 39.1], [117.3, 39.3], [117.1, 39.3], [117.2, 39.1]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "重庆市" },
      "geometry": { "type": "Polygon", "coordinates": [[[106.5, 29.6], [106.6, 29.8], [106.4, 29.8], [106.5, 29.6]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "广东省" },
      "geometry": { "type": "Polygon", "coordinates": [[[113.3, 23.1], [113.4, 23.3], [113.2, 23.3], [113.3, 23.1]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "江苏省" },
      "geometry": { "type": "Polygon", "coordinates": [[[118.8, 32.1], [118.9, 32.3], [118.7, 32.3], [118.8, 32.1]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "浙江省" },
      "geometry": { "type": "Polygon", "coordinates": [[[120.2, 30.3], [120.3, 30.5], [120.1, 30.5], [120.2, 30.3]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "山东省" },
      "geometry": { "type": "Polygon", "coordinates": [[[117.0, 36.7], [117.1, 36.9], [116.9, 36.9], [117.0, 36.7]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "河南省" },
      "geometry": { "type": "Polygon", "coordinates": [[[113.6, 34.8], [113.7, 35.0], [113.5, 35.0], [113.6, 34.8]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "四川省" },
      "geometry": { "type": "Polygon", "coordinates": [[[104.1, 30.7], [104.2, 30.9], [104.0, 30.9], [104.1, 30.7]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "湖北省" },
      "geometry": { "type": "Polygon", "coordinates": [[[114.3, 30.6], [114.4, 30.8], [114.2, 30.8], [114.3, 30.6]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "湖南省" },
      "geometry": { "type": "Polygon", "coordinates": [[[112.9, 28.2], [113.0, 28.4], [112.8, 28.4], [112.9, 28.2]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "福建省" },
      "geometry": { "type": "Polygon", "coordinates": [[[119.3, 26.1], [119.4, 26.3], [119.2, 26.3], [119.3, 26.1]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "安徽省" },
      "geometry": { "type": "Polygon", "coordinates": [[[117.3, 31.9], [117.4, 32.1], [117.2, 32.1], [117.3, 31.9]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "河北省" },
      "geometry": { "type": "Polygon", "coordinates": [[[114.5, 38.0], [114.6, 38.2], [114.4, 38.2], [114.5, 38.0]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "陕西省" },
      "geometry": { "type": "Polygon", "coordinates": [[[108.9, 34.3], [109.0, 34.5], [108.8, 34.5], [108.9, 34.3]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "江西省" },
      "geometry": { "type": "Polygon", "coordinates": [[[115.9, 28.7], [116.0, 28.9], [115.8, 28.9], [115.9, 28.7]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "辽宁省" },
      "geometry": { "type": "Polygon", "coordinates": [[[123.4, 41.8], [123.5, 42.0], [123.3, 42.0], [123.4, 41.8]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "云南省" },
      "geometry": { "type": "Polygon", "coordinates": [[[102.8, 25.0], [102.9, 25.2], [102.7, 25.2], [102.8, 25.0]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "山西省" },
      "geometry": { "type": "Polygon", "coordinates": [[[112.5, 37.9], [112.6, 38.1], [112.4, 38.1], [112.5, 37.9]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "广西壮族自治区" },
      "geometry": { "type": "Polygon", "coordinates": [[[108.3, 22.8], [108.4, 23.0], [108.2, 23.0], [108.3, 22.8]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "贵州省" },
      "geometry": { "type": "Polygon", "coordinates": [[[106.7, 26.6], [106.8, 26.8], [106.6, 26.8], [106.7, 26.6]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "吉林省" },
      "geometry": { "type": "Polygon", "coordinates": [[[125.3, 43.9], [125.4, 44.1], [125.2, 44.1], [125.3, 43.9]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "黑龙江省" },
      "geometry": { "type": "Polygon", "coordinates": [[[126.6, 45.8], [126.7, 46.0], [126.5, 46.0], [126.6, 45.8]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "内蒙古自治区" },
      "geometry": { "type": "Polygon", "coordinates": [[[111.7, 40.8], [111.8, 41.0], [111.6, 41.0], [111.7, 40.8]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "新疆维吾尔自治区" },
      "geometry": { "type": "Polygon", "coordinates": [[[87.6, 43.8], [87.7, 44.0], [87.5, 44.0], [87.6, 43.8]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "甘肃省" },
      "geometry": { "type": "Polygon", "coordinates": [[[103.8, 36.1], [103.9, 36.3], [103.7, 36.3], [103.8, 36.1]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "海南省" },
      "geometry": { "type": "Polygon", "coordinates": [[[110.3, 20.0], [110.4, 20.2], [110.2, 20.2], [110.3, 20.0]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "宁夏回族自治区" },
      "geometry": { "type": "Polygon", "coordinates": [[[106.3, 38.5], [106.4, 38.7], [106.2, 38.7], [106.3, 38.5]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "青海省" },
      "geometry": { "type": "Polygon", "coordinates": [[[101.8, 36.6], [101.9, 36.8], [101.7, 36.8], [101.8, 36.6]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "西藏自治区" },
      "geometry": { "type": "Polygon", "coordinates": [[[91.1, 29.7], [91.2, 29.9], [91.0, 29.9], [91.1, 29.7]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "香港特别行政区" },
      "geometry": { "type": "Polygon", "coordinates": [[[114.2, 22.3], [114.3, 22.5], [114.1, 22.5], [114.2, 22.3]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "澳门特别行政区" },
      "geometry": { "type": "Polygon", "coordinates": [[[113.5, 22.2], [113.6, 22.4], [113.4, 22.4], [113.5, 22.2]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "台湾省" },
      "geometry": { "type": "Polygon", "coordinates": [[[121.5, 25.0], [121.6, 25.2], [121.4, 25.2], [121.5, 25.0]]] }
    }
  ]
};

// 导出地图数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHINA_MAP_DATA;
}

// 全局变量形式，供浏览器使用
window.CHINA_MAP_DATA = CHINA_MAP_DATA; 